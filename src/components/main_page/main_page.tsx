import React, { useEffect } from "react";

import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { getSavedCitiesData } from "../../store/async_actions/get_saved_cities_data";
import CityCard from "../city_card/city_card";

export const MainPage = () => {
  const cities = useSelector((state: any) => state.cities);
  const dispatch = useDispatch<any>();

  const fetchCities = () => {
    const cityIds = localStorage.getItem("citiesId");
    if (cityIds) {
      const convertToStringIDs = JSON.parse(cityIds).toString();
      dispatch(getSavedCitiesData(convertToStringIDs));
    } else {
      return;
    }
  };

  useEffect(() => {
    fetchCities();
  }, [cities]);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {cities &&
        cities.map((city: any) => <CityCard key={city.id} city={city} />)}
    </Box>
  );
};
