import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { cityCoordinates, FullWeather } from './weather';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  private readonly _weathers = new BehaviorSubject<FullWeather[]>([]);
  readonly weathers$ = this._weathers.asObservable();

  constructor(private weatherService: WeatherService) { }

  getWeatherByName(name: string) {
    const {lat, lon} = cityCoordinates[name];
    this.weatherService.getWeatherByName(lat, lon).subscribe(
      (res: FullWeather) => this._weathers.next([...this._weathers.value, res]),
      (error) => console.error(error)
    );
  }
}
