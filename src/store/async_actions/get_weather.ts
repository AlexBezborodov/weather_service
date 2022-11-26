import { API_KEY, BASE_URL } from "../../constants";
import { CityData, ErrorData } from "../../interfaces/common";
import { getCityWeather } from "./../action_creators";

export const getCityWeatherData = (value: string) => {
  const url = `${BASE_URL}q=${value}&appid=${API_KEY}`;
  return (dispatch: any) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data: CityData | ErrorData) => {
        if (data.cod === 200) {
          dispatch(getCityWeather(data));
          const citiesId = localStorage.getItem("citiesId");
          if (citiesId) {
            const updatedCities = [...JSON.parse(citiesId), data.id];
            localStorage.setItem("citiesId", JSON.stringify(updatedCities));
          } else {
            localStorage.setItem("citiesId", JSON.stringify([data.id]));
          }
        } else {
          alert(data.message);
        }
      });
  };
};
