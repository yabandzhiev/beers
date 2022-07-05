import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import RandomBeers from "./components/RandomBeers/RandomBeers";
import FavoriteBeers from "./components/FavoriteBeers/FavoriteBeers";

import "./App.scss";
import AuthRouteGuard from "./common/RoutesGuard/AuthRouteGuard";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const App = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route element={<AuthRouteGuard />}>
          <Route index element={<Home />} />
          <Route path="random" element={<RandomBeers />} />
          <Route path="favorites" element={<FavoriteBeers />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
