import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDataService, WeatherService } from './data';

const PROVIDERS = [WeatherService, WeatherDataService];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CoreModule {
  constructor() {}

	static forRoot(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: CoreModule,
			providers: [...PROVIDERS],
		};
	}
 }
