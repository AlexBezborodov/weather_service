export const API_KEY = "e2ed39f22217a6eba1c4aa6697d844c5";
export const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`;
export const MULTIPLE_CITIES_URL = `https://api.openweathermap.org/data/2.5/group?id=`;
//e2ed39f22217a6eba1c4aa6697d844c5
//1db2eafd57c395fd6ee79ed8ab422f37

export const TEST_CITY = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 501,
      main: "Rain",
      description: "moderate rain",
      icon: "10d",
    },
  ],
  base: "stations",
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  rain: {
    "1h": 3.16,
  },
  clouds: {
    all: 100,
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: "IT",
    sunrise: 1661834187,
    sunset: 1661882248,
  },
  timezone: 7200,
  id: 3163858,
  name: "Zocca",
  cod: 200,
};
