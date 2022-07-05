import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import {
  setNewSearchState,
  fetchData,
  fetchRandomBeer,
  toggleFavorites,
} from "../../store/beers/beersSlice";

import { logInUser, logOutUser } from "../../store/user/userSlice";

export const useBeerActionsDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { setNewSearchState, fetchData, fetchRandomBeer, toggleFavorites },
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
