import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { cityCoordinates, FullWeather } from './weather';
import { BehaviorSubject } from 'rxjs';
import { State } from 'src/app/shared/utils/util-functions';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  readonly cityNamesList = ['amsterdam', 'london', 'paris', 'moscow', 'skopje'];

  private readonly _weathers = new BehaviorSubject<FullWeather[]>([]);
  readonly weathers$ = this._weathers.asObservable();

  private readonly _weathersState = new BehaviorSubject<State>(
    State.UNINITIALIZED
  );
  readonly weathersState$ = this._weathersState.asObservable();

  constructor(private weatherService: WeatherService) {}

  getWeathers() {
    this._weathersState.next(State.LOADING);

    //getting weather of each city
    this.cityNamesList.forEach((name) => {
      const { lat, lon } = cityCoordinates[name];
      this.weatherService.getWeatherByName(lat, lon).subscribe(
        (res: FullWeather) => {
          this._weathers.next([...this._weathers.value, res]);

          //if all results have come successfully
          if (
            this._weathersState.value !== State.FAILED &&
            this._weathers.value?.length === this.cityNamesList.length
          ) {
            this._weathersState.next(State.SUCCESS);
          }
        },
        (error) => {
          //one city has failed
          this._weathersState.next(State.FAILED);
          console.error(error);
        }
      );
    });
  }
}
