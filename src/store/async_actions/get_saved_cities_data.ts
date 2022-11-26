import { API_KEY, MULTIPLE_CITIES_URL } from "../../constants";
import { CityData, ErrorData } from "../../interfaces/common";
import { addSavedCitiesData } from "./../action_creators";

export const getSavedCitiesData = (cityIds: string) => {
  const url = `${MULTIPLE_CITIES_URL}${cityIds}&appid=${API_KEY}`;
  return (dispatch: any) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        if (data.list) {
          dispatch(addSavedCitiesData(data.list));
        } else {
          alert(data.message);
        }
      });
  };
};
