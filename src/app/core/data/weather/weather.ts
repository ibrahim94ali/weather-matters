export interface FullWeather {
  current: CurrentWeather;
  hourly: HourlyWeather [];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};

export interface CurrentWeather {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather [];
  wind_deg: number;
  wind_speed: number;
};

export interface HourlyWeather extends CurrentWeather {
  pop: number;
};

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export const cityCoordinates = {
  'amsterdam': {
    lat: 52.37,
    lon: 4.89
  }
}
