import React from "react";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { TEST_CITY } from "../../constants";
import { store } from "../../store/store";
import CityCard from "./city_card";

describe("CityCard component", () => {
  it("CityCard renders", () => {
    render(
      <Provider store={store}>
        <Router>
          <CityCard city={TEST_CITY} />
        </Router>
      </Provider>
    );
    expect(screen.getByText("Zocca")).toBeInTheDocument();
  });
  it("CityCard snapshot", () => {
    const item = render(
      <Provider store={store}>
        <Router>
          <CityCard city={TEST_CITY} />
        </Router>
      </Provider>
    );
    expect(item).toMatchSnapshot();
  });
});
