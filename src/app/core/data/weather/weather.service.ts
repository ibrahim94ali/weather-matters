import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FullWeather } from './weather';
import { capitalize } from 'src/app/shared/utils/util-functions';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherByName(lat: number, lon: number): Observable<FullWeather> {
    return this.http
      .get<FullWeather>(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=daily,minutely&appid=${environment.weatherAPIKey}`
      )
      .pipe(
        map((result: FullWeather) => this.addAdditionalInformation(result))
      );
  }

  //adding names and icon links based on current weather icon id
  addAdditionalInformation(result: FullWeather): FullWeather {
    result.name = capitalize(this.parseNames(result?.timezone));

    if (result?.current?.weather?.length) {
      result.current.weather[0].icon_link = `https://openweathermap.org/img/wn/${result.current.weather[0].icon}.png`;
    }
    return result;
  }

  //parsing Timezone Names (eg: Europe/Amsterdam)
  parseNames(name: string): string {
    if (name.includes('/')) {
      return name.split('/')[1];
    } else {
      return name;
    }
  }
}
