import { API_KEY, BASE_URL } from "../../constants";
import { CityData, ErrorData } from "../../interfaces/common";
import { updateCityWeather } from "./../action_creators";

export const updateCityWeatherData = (value: string) => {
  const url = `${BASE_URL}q=${value}&appid=${API_KEY}`;
  return (dispatch: any) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data: CityData | ErrorData) => {
        if (data.cod === 200) {
          dispatch(updateCityWeather(data));
        } else {
          alert(data.message);
        }
      });
  };
};
