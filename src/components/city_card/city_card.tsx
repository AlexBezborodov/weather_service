import * as React from "react";

import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CityCardProps } from "../../interfaces";
import { deleteCity } from "../../store/action_creators";
import { updateCityWeatherData } from "../../store/async_actions/update_city_weather";
import { convertToCelsius, convertToFarenghate } from "../../utils/utils";

export default function CityCard({ city }: CityCardProps) {
  const {
    name,
    main: { temp },
    weather,
    id,
    sys: { country },
  } = city;
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  const refreshWeather = () => {
    dispatch(updateCityWeatherData(name));
  };
  const deleteItem = () => {
    dispatch(deleteCity(id));
  };

  return (
    <Card sx={{ width: 300, margin: 1 }}>
      <CardActionArea
        onClick={() => navigate(`details/${name}/${id}`, { state: { city } })}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body1">Country: {country}</Typography>
          <Typography variant="body1">
            Temperature: {convertToCelsius(temp)} °C /{" "}
            {convertToFarenghate(temp)} °F
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weather: {weather[0].main}
          </Typography>
          <div>
            <img id="wicon" src={iconUrl} alt="Weather icon" />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small" color="primary" onClick={refreshWeather}>
          Refresh weather
        </Button>
        <Button size="small" color="error" onClick={deleteItem}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
