import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private weatherService: WeatherService) { }

  getWeatherByName(name: string) {
    this.weatherService.getWeatherByName(name).subscribe(
      (res) => console.log(res),
      (error) => console.error(error)
    );
  }
}
