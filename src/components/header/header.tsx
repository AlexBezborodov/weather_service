import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useMatch } from "react-router-dom";

import Search from "../search/search";

export const Header = () => {
  const match = useMatch("/");
  return (
    <Box sx={{ flexGrow: 1, flexWrap: "wrap" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgba(18, 18, 18, 0.345)" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            OpenWeather
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          {match && <Search />}
          <Box sx={{ flexGrow: 1 }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
