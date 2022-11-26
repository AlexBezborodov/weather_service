export interface CityData {
  coord: Coords;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number | string;
  name: string;
  cod: number;
  message?: string;
}

export interface Coords {
  lon: number;
  lat: number;
}
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface ErrorData {
  cod: number;
  message: string;
  id?: number | string;
}
export interface CityCardProps {
  city: CityData;
}

export interface Store {
  cities: CityData[] | [];
  citiesID: number[] | [];
}
