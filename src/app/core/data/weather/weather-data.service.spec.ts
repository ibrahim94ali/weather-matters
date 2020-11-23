import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WeatherDataService } from './weather-data.service';
import { cityCoordinates } from './weather';
import { dummyData } from 'src/app/shared/utils/dummyData';
import { of } from 'rxjs';
import { WeatherService } from './weather.service';

describe('WeatherDataService', () => {
  let service: WeatherDataService;

  let weatherServiceStub: any;

  beforeEach(async () => {
    //will use dummyData to fake responses of API
    weatherServiceStub = {
      getWeatherByName: () => of(dummyData),
    };

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{ provide: WeatherService, useValue: weatherServiceStub }],
    });
    service = TestBed.inject(WeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 5 city names', () => {
    expect(service.cityNamesList).toHaveSize(5);
  });

  it('should have 5 city coordinates', () => {
    expect(Object.keys(cityCoordinates)).toHaveSize(5);
  });

  it('should have the coordinates of all given cities', () => {
    service.cityNamesList.forEach((city) => {
      expect(cityCoordinates[city]).toBeTruthy();
    });
  });

  it('should get weathers of 5 cities from API', () => {
    service.getWeathers();
    service.weathers$.subscribe((weathers) => {
      expect(weathers).toHaveSize(5);
    });
  });
});
