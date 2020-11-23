import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/core/data';
import { filter, map } from 'rxjs/operators';
import { FullWeather } from 'src/app/core/data/weather/weather';
import { LineChartData } from 'src/app/shared/line-chart/line-chart.component';
import { listAnimation } from 'src/app/shared/utils/animations';
import { State } from 'src/app/shared/utils/util-functions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [listAnimation],
})
export class HomeComponent implements OnInit {
  public LoadingState: typeof State = State;
  chartData: LineChartData;

  weathersState$ = this.weatherDataService.weathersState$;
  weathers: FullWeather[];
  weathers$ = this.weatherDataService.weathers$.pipe(
    //waiting all 5 results to come
    filter((result) => result?.length === 5),
    map((result) => {
      this.weathers = result.sort((a, b) => (a?.name > b?.name ? 1 : -1));
      return this.weathers;
    })
  );

  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    this.weatherDataService.getWeathers();
  }

  mapChartLabels(data: FullWeather): string[] {
    return data.hourly.map((hour) => {
      //converting unix timestamp to HH:mm only
      return new Date(hour.dt * 1000)?.toTimeString()?.slice(0, 5);
    });
  }

  mapChartData(data: FullWeather): number[] {
    return data.hourly.map((hour) => Math.round(hour?.temp));
  }

  seeHourlyChart(i: number): void {
    //adding data to chart for 24 hours
    this.chartData = {
      labels: this.mapChartLabels(this.weathers[i]).slice(0, 24),
      data: this.mapChartData(this.weathers[i]).slice(0, 24),
      name: this.weathers[i].name,
    };
    setTimeout(() => {
      //scrolling to bottom of the page. We need timeout function to wait canvas to be rendered
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }

  closeChart(): void {
    this.chartData = null;
    setTimeout(() => {
      //scrolling to top of the page
      window.scrollTo(0, 0);
    }, 100);
  }
}
