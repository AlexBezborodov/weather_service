import React from "react";

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "../../store/store";
import { Header } from "./header";

it("Header renders", () => {
  render(
    <Provider store={store}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );
  expect(screen.getByText("OpenWeather")).toBeInTheDocument();
});
