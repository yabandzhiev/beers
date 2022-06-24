import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { setNewState, toggleFavourites } from "../../store/beers/beersSlice";

export const useBeerActionsDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ setNewState, toggleFavourites }, dispatch);
};
