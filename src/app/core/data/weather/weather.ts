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
  icon_link?: string; //icon links will be generated here
};

export const cityCoordinates = {
  'amsterdam': {
    lat: 52.37,
    lon: 4.89
  },
  'london' : {
    lat: 51.51,
    lon: -0.12
  },
  'paris': {
    lat: 48.85,
    lon: 2.35
  },
  'los angeles': {
    lat: 34.05,
    lon: -118.24
  },
  'skopje': {
    lat: 42,
    lon: 21.42
  }
}
