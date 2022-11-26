import { CityData, ErrorData } from "../interfaces";
import {
  GET_CITY_WEATHER,
  UPDATE_CITY_WEATHER,
  DELETE_CITY_WEATHER,
  ADD_SAVED_CITIES,
} from "./action_type_constants";

export const getCityWeather = (payload: CityData | ErrorData) => ({
  type: GET_CITY_WEATHER,
  payload,
});

export const updateCityWeather = (payload: CityData | ErrorData) => ({
  type: UPDATE_CITY_WEATHER,
  payload,
});
export const deleteCity = (payload: string | number) => ({
  type: DELETE_CITY_WEATHER,
  payload,
});
export const addSavedCitiesData = (payload: any) => ({
  type: ADD_SAVED_CITIES,
  payload,
});
