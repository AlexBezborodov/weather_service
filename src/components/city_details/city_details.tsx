import React from "react";

import { useLocation } from "react-router-dom";

export const CityDetails = () => {
  const { state } = useLocation();

  console.log("state", state);
  return <div>city weather details</div>;
};
