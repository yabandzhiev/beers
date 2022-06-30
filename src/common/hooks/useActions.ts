import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import {
  setNewState,
  fetchData,
  fetchRandomBeer,
  toggleFavourites,
} from "../../store/beers/beersSlice";

import { logInUser, logOutUser } from "../../store/user/userSlice";

export const useBeerActionsDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { setNewState, fetchData, fetchRandomBeer, toggleFavourites },
    dispatch
  );
};

export const useUserActionsDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      logInUser,
      logOutUser,
    },
    dispatch
  );
};
