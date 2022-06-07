import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TennisPlayer } from '@data/model/tennis-player';
import { TennisPlayerService } from '@data/service/tennis-player.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let tennisPlayerService: jasmine.SpyObj<TennisPlayerService> = jasmine.createSpyObj('TennisPlayerService', ['getListPlayers']);


  let playersFixture = [
    { "id": 17, "firstname": "Rafael", "lastname": "Nadal", "shortname": "R.NAD", "sex": "M", "country": { "picture": "https://data.latelier.co/training/tennis_stats/resources/Espagne.png", "code": "ESP" }, "picture": "https://data.latelier.co/training/tennis_stats/resources/Nadal.png", "data": { "rank": 1, "points": 1982, "weight": 85000, "height": 185, "age": 33, "last": [1, 0, 0, 0, 1] } },
    { "id": 52, "firstname": "Novak", "lastname": "Djokovic", "shortname": "N.DJO", "sex": "M", "country": { "picture": "https://data.latelier.co/training/tennis_stats/resources/Serbie.png", "code": "SRB" }, "picture": "https://data.latelier.co/training/tennis_stats/resources/Djokovic.png", "data": { "rank": 2, "points": 2542, "weight": 80000, "height": 188, "age": 31, "last": [1, 1, 1, 1, 1] } }
  ];

  let mockRes = {
    status: 200,
    body: playersFixture
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        SharedModule,
        BrowserAnimationsModule
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
    fixture = TestBed.createComponent(HomeComponent);
    tennisPlayerService = TestBed.inject(TennisPlayerService) as jasmine.SpyObj<TennisPlayerService>
    tennisPlayerService.getListPlayers.and.returnValue(of(mockRes));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getListPlayers', () => {
    expect(tennisPlayerService.getListPlayers).toHaveBeenCalled();
  });

  it('should retrieve fixture data', (done) => {
    tennisPlayerService.getListPlayers().subscribe(
      (res) => {
        expect(res).toEqual(mockRes);
        done();
      });
  });

  it('should have tennisPlayerList and tennisPlayerListDisplayed the same at start', () => {
    expect(component.tennisPlayerList).toEqual(component.tennisPlayerListDisplayed);
    expect(component.tennisPlayerListDisplayed.length).toBe(2);
  });

  it('should get one player when searching with "Raf" string', () => {
    component.tennisPlayerList = playersFixture as unknown as TennisPlayer[];
    component.tennisPlayerListDisplayed = component.tennisPlayerList;
    component.inputSearch = "Raf";
    component.search();
    expect(component.tennisPlayerListDisplayed.length).toBe(1);
    expect(component.tennisPlayerListDisplayed[0].firstname).toBe("Rafael");
    expect(component.tennisPlayerListDisplayed[0].lastname).toBe("Nadal");
  });

  it('should get one player when searching with "  Raf" string"', () => {
    component.tennisPlayerList = playersFixture as unknown as TennisPlayer[];
    component.tennisPlayerListDisplayed = component.tennisPlayerList;
    component.inputSearch = "  Raf";
    component.search();
    expect(component.tennisPlayerListDisplayed.length).toBe(1);
    expect(component.tennisPlayerListDisplayed[0].firstname).toBe("Rafael");
    expect(component.tennisPlayerListDisplayed[0].lastname).toBe("Nadal");
  });

  it('should get two players when searching with " " string"', () => {
    component.tennisPlayerList = playersFixture as unknown as TennisPlayer[];
    component.tennisPlayerListDisplayed = component.tennisPlayerList;
    component.inputSearch = " ";
    component.search();
    expect(component.tennisPlayerListDisplayed.length).toBe(2);
  });
});
