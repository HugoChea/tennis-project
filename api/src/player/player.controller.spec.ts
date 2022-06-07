import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { Player } from './schemas/player.schema';

describe('PlayerController', () => {
  let controller: PlayerController;
  let service: PlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [
        PlayerService,
        {
          provide: getModelToken(Player.name),
          useValue: Model,
        },
      ],
    }).compile();

    service = module.get<PlayerService>(PlayerService);
    controller = module.get<PlayerController>(PlayerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
