import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TennisPlayer } from '@data/model/tennis-player';
import { TennisPlayerService } from '@data/service/tennis-player.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let tennisPlayerService: jasmine.SpyObj<TennisPlayerService> = jasmine.createSpyObj('TennisPlayerService', ['getPlayerById']);

  let playerFixture = { 
    "id": 17, 
    "firstname": "Rafael", 
    "lastname": "Nadal", 
    "shortname": "R.NAD", 
    "sex": "M", 
    "country": { "picture": "https://data.latelier.co/training/tennis_stats/resources/Espagne.png", "code": "ESP" }, 
    "picture": "https://data.latelier.co/training/tennis_stats/resources/Nadal.png", 
    "data": { "rank": 1, "points": 1982, "weight": 85000, "height": 185, "age": 33, "last": [1, 0, 0, 0, 1] } 
  };

  let mockRes = {
    status: 200,
    body: playerFixture
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        SharedModule
      ],
      providers: [
        {
          provide: TennisPlayerService, useValue: tennisPlayerService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    tennisPlayerService = TestBed.inject(TennisPlayerService) as jasmine.SpyObj<TennisPlayerService>
    tennisPlayerService.getPlayerById.and.returnValue(of(mockRes));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPlayerById', () => {
    expect(tennisPlayerService.getPlayerById).toHaveBeenCalled();
  });

  it('should retrieve fixture data', (done) => {
    tennisPlayerService.getPlayerById(17).subscribe(
      (res) => {
        expect(res).toEqual(mockRes);
        done();
      });
  });

  it('should retrieve fixture data', () => {
    expect(component.player).toEqual(playerFixture as unknown as TennisPlayer)
  });
});
