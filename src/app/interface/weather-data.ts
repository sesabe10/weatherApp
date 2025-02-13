export interface WeatherData {
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ],

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string
  }
}
