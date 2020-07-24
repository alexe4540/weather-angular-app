export interface InputWeather {
  coord: {
    lon: number,
    lat: number
  };
  main: {
    temp: number,
    feels_like: number,
    humidity: number,
    pressure: number
  };
  weather: [
    {
      main: string
    }
  ];
  wind: {
    speed: number,
    deg: number
  };
  name: string;
  list?: [
    {
      dt_txt: string;
      main: {
        temp: number,
        feels_like: number,
        humidity: number,
        pressure: number
      };
      weather: [
        {
          main: string
        }
      ];
      wind: {
        speed: number,
        deg: number
      };
    }
  ];
}

export interface OutputWeather {
  coord?: {
    lon: number,
    lat: number
  };
  dt_txt?: string;
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sky: string;
  wind_speed: number;
  wind_deg: number;
  city?: string;
}
