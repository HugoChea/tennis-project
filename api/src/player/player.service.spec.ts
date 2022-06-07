import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { StatsResponseDto } from './dto/stats-response.dto';
import { PlayerService } from './player.service';
import { Player } from './schemas/player.schema';

describe('PlayerService', () => {
  let service: PlayerService;

  const playerA: Player = {
    id: 0,
    firstname: 'Rafael',
    lastname: 'Nadal',
    shortname: 'RN',
    sex: 'M',
    picture: '',
    country: null,
    data: {
      rank: 1,
      points: 1000,
      weight: 1000,
      height: 100,
      age: 10,
      last: [],
    },
  };
  const playerB: Player = {
    id: 1,
    firstname: 'Novak',
    lastname: 'Djokovic',
    shortname: 'ND',
    sex: 'M',
    picture: '',
    country: null,
    data: {
      rank: 2,
      points: 2000,
      weight: 2000,
      height: 200,
      age: 20,
      last: [],
    },
  };
  const playerC: Player = {
    id: 3,
    firstname: 'Roger',
    lastname: 'Federer',
    shortname: 'RF',
    sex: 'M',
    picture: '',
    country: null,
    data: {
      rank: 3,
      points: 3000,
      weight: 3000,
      height: 300,
      age: 30,
      last: [],
    },
  };

  const mockRepository = {
    find() {
      return [playerA, playerB, playerC];
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayerService,
        {
          provide: getModelToken(Player.name),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PlayerService>(PlayerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate bmi', () => {
    const result = service.calculateIMC(1.75, 75);
    expect(result).toEqual(24.5);
  });

  it('should not calculate bmi because of dividing by 0', () => {
    expect(() => {
      service.calculateIMC(0, 75);
    }).toThrow('Invalid value');
  });

  it('should calculate cm to m', () => {
    const result = service.convertCmToM(175);
    expect(result).toEqual(1.75);
  });

  it('should calculate g to kg', () => {
    const result = service.convertGramToKilo(1000);
    expect(result).toEqual(1);
  });

  it('should return median height of array of even length', () => {
    const array = [playerA, playerB];
    const result = service.calculateMedianHeight(array);
    expect(result).toEqual(150);
  });

  it('should return median height of array of odd length', () => {
    const array = [playerA, playerB, playerC];
    const result = service.calculateMedianHeight(array);
    expect(result).toEqual(200);
  });

  it('should return median height of array of odd length', async () => {
    const heightServiceSpy = jest.spyOn(service, 'calculateMedianHeight');
    const bmiServiceSpy = jest.spyOn(service, 'calculateIMC');
    const result = await service.getStats();
    const expectedResult: StatsResponseDto = {
      medianHeight: 200,
      averageIMC: 0.6,
      countryHighestWinrate: '',
    };
    expect(heightServiceSpy).toHaveBeenCalled();
    expect(bmiServiceSpy).toHaveBeenCalled();
    expect(result).toEqual(expectedResult);
  });
});
