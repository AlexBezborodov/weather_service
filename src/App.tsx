import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CityDetails } from "./components/city_details";
import { Header } from "./components/header";
import "./App.css";
import { Layout } from "./components/layout";
import { MainPage } from "./components/main_page";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/details/:city/:id" element={<CityDetails />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
