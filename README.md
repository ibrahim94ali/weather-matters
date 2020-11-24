# Weather Matters

Weather Matters is a web application which shows current and forecast weather information of **Amsterdam**, **London**, **Moscow**, **Paris**, and **Skopje**.

App is deployed and ready here.
[Weather Matters](https://ibrahim94ali.github.io/weather-matters/)

## API

This project uses **OpenWeather API** to get weather data.
For more information check [OpenWeather One Call API](https://openweathermap.org/api/one-call-api/)

## Architechture

### Design

[Angular Material](https://material.angular.io/) is used to get user friendly components and custom theme is created.

[ChartJS](https://www.chartjs.org/) is used to show hourly forecast of weathers in _Line Chart_

### Core Module

Core Module is where all data related services will be implemented. In this app, only one service group is needed.

There are two types of services in this group.

1. weather.service
2. weather-data.service

**Weather Service:**

_Weather Service_ is the service which handles http requests, modifies data from API and returns in an **Observable**.

**Weather Data Service:**

_Weather Data Service_ is the service which stores the data coming from _Weather Service_ and state of the data in **BehaviourSubjects**.
Also it has methods which can be called from components to initialize getting data.

Data which has been stored in _BehaviourSubjects_ are private to this service, and only this service can modify data.

In order to let other components read the data, public **Observables** are created and linked to _BehaviourSubjects_.

Whenever a _BehaviourSubject_ emits new data, subscribers of the linked _Observable_ will get the data automatically.

States have four available values.

- UNINITIALIZED
- LOADING
- SUCCESS
- FAILED

Initially it's UNINITIALIZED, when we call the function to get data it becomes LOADING. After the response it becomes either SUCCESS or FAILED.

This state values are used to show spinner in LOADING, error component in FAILED, and normal data in SUCCESS.

### Shared Module

_Shared Module_ is the module where all reusable modules are exported to have the scope to be called anywhere in the project.
For example: **Error Module** is exported here. Whenever an HTTP request fails, data state will be _Failed_ and _Error Component_ will be shown.

_Line Chart_ and _Angular Material_ modules are also here.

### Styles

- _Main.scss_ is the main style sheet
- _Material.scss_ is the style sheet for Angular Material custom theme with color palette values
- _Variables.scss_ is the style sheet which stores variables for colors and font-size

### Responsiveness

Media queries are used to create responsive views for mobile and desktop users.

_Base Font Size_ is changed to **62.5%** in order to make 1rem to be 10px for easy calculations.
Anywhere in the project, rem units are used.
With this approach, we can change all the width values by changing only default font-size.

### Contact Me

Mail: **94ibrahimali@gmail.com**

<br />
<br />

## Helpful Information for Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
