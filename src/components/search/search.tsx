import React, { useState } from "react";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

import { getCityWeatherData } from "../../store/async_actions/get_weather";

export default function Search() {
  const dispatch = useDispatch<any>();

  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const addCity = () => {
    dispatch(getCityWeatherData(inputValue));
    setInputValue("");
  };
  return (
    <Box
      sx={{
        width: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#ffff",
        paddingX: 2,
        paddingY: 1,
        marginY: 1,
        borderRadius: "1rem",
      }}
    >
      <TextField
        size="small"
        fullWidth
        placeholder="city"
        id="city"
        onChange={handleChange}
        value={inputValue}
      />
      <Button
        variant="outlined"
        size="small"
        sx={{ width: 120, marginX: 1 }}
        onClick={addCity}
        disabled={!inputValue}
      >
        Add City
      </Button>
    </Box>
  );
}
