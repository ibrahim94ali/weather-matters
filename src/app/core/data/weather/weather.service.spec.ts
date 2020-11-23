import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { dummyData } from 'src/app/shared/utils/dummyData';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse city names if it has a slash "/"', () => {
    expect(service.parseNames('Europe/Amsterdam')).toBe('Amsterdam');
    expect(service.parseNames('Amsterdam')).toBe('Amsterdam');
  });

  it('should add names to cities', () => {
    const fullCityData = service.addAdditionalInformation(dummyData);
    expect(fullCityData.name).toBeTruthy();
  });

  it('should add icon links based on icon ids', () => {
    const fullCityData = service.addAdditionalInformation(dummyData);
    expect(fullCityData.current.weather[0].icon_link).toBeTruthy();
  });
});
