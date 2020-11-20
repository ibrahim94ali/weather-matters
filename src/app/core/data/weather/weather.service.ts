import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherByName(name: string): Observable<Weather> {
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${environment.weatherAPIKey}`);
  }
}
