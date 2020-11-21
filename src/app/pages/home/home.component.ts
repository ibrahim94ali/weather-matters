import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/core/data';
import { filter, map } from 'rxjs/operators';
import { FullWeather } from 'src/app/core/data/weather/weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  weathers: FullWeather[];
  weathers$ = this.weatherDataService.weathers$.pipe(
    filter(result => result.length > 0),
    map(result => {
      this.weathers = result;
      return this.weathers;
    })
  );

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.weatherDataService.getWeathersByNames(['amsterdam', 'london', 'paris', 'los angeles', 'skopje']);
  }
}
