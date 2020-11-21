import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FullWeather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByName(lat: number, lon: number): Observable<FullWeather> {
    return this.http.get<FullWeather>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=daily,minutely&appid=${environment.weatherAPIKey}`)
    .pipe(
      map((result: FullWeather) => this.addIconLink(result))
    );
  }

  addIconLink(result: FullWeather): FullWeather {
    if (result?.current?.weather?.length) {
      result.current.weather[0].icon_link = `http://openweathermap.org/img/wn/${result.current.weather[0].icon}.png`
    }
    return result;
  }
}
