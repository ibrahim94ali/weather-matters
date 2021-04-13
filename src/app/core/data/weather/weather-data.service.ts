import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { cityCoordinates, FullWeather } from './weather';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { State } from 'src/app/shared/utils/util-functions';
import { catchError } from 'rxjs/operators';

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
    let cityObservables = [];
    this.cityNamesList.forEach((name) => {
      const { lat, lon } = cityCoordinates[name];
      cityObservables.push(this.weatherService.getWeatherByName(lat, lon));
    });

    forkJoin(cityObservables)
      .pipe(
        catchError((error) => {
          this._weathersState.next(State.FAILED);
          return of(error);
        })
      )
      .subscribe((val: FullWeather[]) => {
        this._weathers.next(val);
        this._weathersState.next(State.SUCCESS);
      });
  }
}
