import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home.component';
import { dummyData } from 'src/app/shared/utils/dummyData';
import { of } from 'rxjs';
import { WeatherDataService } from 'src/app/core/data';
import { State } from 'src/app/shared/utils/util-functions';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let weatherDataServiceStub: any;

  beforeEach(async () => {
    //will use dummyData to fake responses of API
    weatherDataServiceStub = {
      getWeathers: () =>
        of([dummyData, dummyData, dummyData, dummyData, dummyData]),
      weathers$: of([dummyData, dummyData, dummyData, dummyData, dummyData]),
      weathersState$: of(State.SUCCESS),
    };

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        { provide: WeatherDataService, useValue: weatherDataServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data of 5 cities', () => {
    expect(component.weathers).toHaveSize(5);
  });

  it('should get state of the calls', () => {
    component.weathersState$.subscribe((weathersState) => {
      expect(weathersState).toBe(State.SUCCESS);
    });
  });
});
