import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    beers: [],
    favourites: [],
  },
};

export const beersSlice = createSlice({
  name: "beers",
  initialState,
  reducers: {
    toggleFavourites: (state, action) => {
      const id = action.payload;

      const foundBeer = state.value.beers.find((beer) => beer.id === id);

      if (foundBeer) {
        state.value.favourites.push(foundBeer);
      }
    },
  },
});
