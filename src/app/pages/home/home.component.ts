import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/core/data';
import { filter, map } from 'rxjs/operators';
import { FullWeather } from 'src/app/core/data/weather/weather';
import { LineChartData } from 'src/app/shared/line-chart/line-chart.component';
import { listAnimation } from 'src/app/shared/utils/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [listAnimation]
})
export class HomeComponent implements OnInit {

  chartData: LineChartData;

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
    this.weatherDataService.getWeathersByNames(['amsterdam', 'london', 'paris', 'moscow', 'skopje']);
  }

  mapChartLabels(data: FullWeather): string[] {
			return data.hourly.map((hour) => {
        return new Date(hour.dt * 1000).toTimeString().slice(0, 5);
      });
    }

  mapChartData(data: FullWeather): number[] {
      return data.hourly.map((hour) => Math.round(hour.temp));
    }

  seeHourlyChart(i: number): void {
    this.chartData = {
      labels: this.mapChartLabels(this.weathers[i]).slice(0, 24),
      data: this.mapChartData(this.weathers[i]).slice(0, 24),
      name: this.weathers[i].name
    }
    setTimeout(() => {
      window.scrollTo(0,9999);
    }, 100);
  }

  closeChart(): void {
    this.chartData = null;
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }
}
