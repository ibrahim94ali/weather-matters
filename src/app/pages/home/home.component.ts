import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/core/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.weatherDataService.getWeatherByName('amsterdam');
  }

}
