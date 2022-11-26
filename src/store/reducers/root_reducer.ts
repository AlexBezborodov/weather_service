import { Store, CityData } from "../../interfaces";
import {
  ADD_SAVED_CITIES,
  DELETE_CITY_WEATHER,
  GET_CITY_WEATHER,
  UPDATE_CITY_WEATHER,
} from "./../action_type_constants";

const initialState: Store = {
  cities: [],
  citiesID: [],
};

export function rootReducer(state: Store = initialState, action: any) {
  const { payload } = action;
  switch (action.type) {
    case GET_CITY_WEATHER:
      return { ...state, cities: state.cities.concat(payload) };
    case UPDATE_CITY_WEATHER:
      return { ...state, cities: updateCity(state.cities, action.payload) };
    case DELETE_CITY_WEATHER:
      return { ...state, cities: deleteCity(state.cities, action.payload) };
    case ADD_SAVED_CITIES:
      return { ...state, cities: payload };
    default:
      return state;
  }
}

const updateCity = (state: CityData[], data: CityData) => {
  const index = state.findIndex((item: CityData) => item.id === data.id);
  state[index] = data;
  return state;
};

const deleteCity = (state: CityData[], data: number) => {
  const filtered = state.filter((item: CityData) => item.id !== data);
  const cityId = filtered.map((item: CityData) => item.id);
  localStorage.setItem("citiesId", JSON.stringify(cityId));
  return filtered;
};
