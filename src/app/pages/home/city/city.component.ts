import { Component, Input, OnInit } from '@angular/core';
import { FullWeather } from 'src/app/core/data/weather/weather';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() weather: FullWeather;

  constructor() { }

  ngOnInit(): void {
  }

}
