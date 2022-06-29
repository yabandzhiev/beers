import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import {
  setNewState,
  fetchData,
  fetchRandomBeer,
  toggleFavourites,
} from "../../store/beers/beersSlice";

export const useBeerActionsDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { setNewState, fetchData, fetchRandomBeer, toggleFavourites },
    dispatch
  );
};
