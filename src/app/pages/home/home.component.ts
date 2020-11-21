import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/core/data';
import { map } from 'rxjs/operators';
import { FullWeather } from 'src/app/core/data/weather/weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  weathers: FullWeather[];
  weathers$ = this.weatherDataService.weathers$.pipe(
    map(result => {
      console.log(result);
      this.weathers = result;
      return result;
    })
  );

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.weatherDataService.getWeatherByName('amsterdam');
  }

}
