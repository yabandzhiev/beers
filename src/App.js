import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import RandomBeers from "./components/RandomBeers/RandomBeers";
import FavouriteBeers from "./components/FavouriteBeers/FavouriteBeers";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="random" element={<RandomBeers />} />
        <Route path="favourites" element={<FavouriteBeers />} />
      </Routes>
    </div>
  );
};

export default App;
