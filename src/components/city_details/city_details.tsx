import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.scss";

import { convertToCelsius, convertToFarenghate } from "../../utils/utils";

export const CityDetails = () => {
  const {
    state: {
      city: {
        name,
        sys: { country },
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        weather,
        wind,
      },
    },
  } = useLocation();
  const navigate = useNavigate();
  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  const backAction = () => {
    navigate("/");
  };

  return (
    <Box position="relative">
      <div className="back-btn">
        <IconButton
          aria-label="back"
          sx={{ color: "#fff" }}
          onClick={backAction}
        >
          <ArrowBackIcon sx={{ fontSize: "36px" }} />
        </IconButton>
      </div>
      <Typography variant="h1" component="div">
        {name}
      </Typography>
      <Typography gutterBottom variant="h2">
        Country: {country}
      </Typography>
      <div>
        <img
          id="wicon"
          width="100"
          height="100"
          src={iconUrl}
          alt="Weather icon"
        />
      </div>
      <Box sx={{ textAlign: "start" }}>
        <Typography variant="h4">
          Temperature: {convertToCelsius(temp)} °C / {convertToFarenghate(temp)}{" "}
          °F
        </Typography>
        <Typography variant="h4">
          Fills like: {convertToCelsius(feels_like)} °C /{" "}
          {convertToFarenghate(feels_like)} °F
        </Typography>
        <Box flexDirection="row">
          <Typography variant="h6" color="text.secondary">
            Temp min: {convertToCelsius(temp_min)} °C /{" "}
            {convertToFarenghate(temp_min)} °F
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Temp max: {convertToCelsius(temp_max)} °C /{" "}
            {convertToFarenghate(temp_max)} °F
          </Typography>
        </Box>
        <Divider />
        <Typography variant="h4">Weather: {weather[0].main}</Typography>
        <Typography variant="h4">
          Weather description: {weather[0].description}
        </Typography>
        <Divider />
        <Typography variant="h5" color="text.secondary">
          Pressure: {pressure}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Humidity: {humidity}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Wind: {wind.speed} m/sec
        </Typography>
      </Box>
    </Box>
  );
};
