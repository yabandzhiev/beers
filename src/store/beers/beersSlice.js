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
    setNewState: (state, action) => {
      state.value.beers = action.payload;
    },

    toggleFavourites: (state, action) => {
      const id = action.payload;

      const foundBeer = state.value.favourites.find((beer) => beer.id === id);

      if (!foundBeer) {
        state.value.favourites.push(foundBeer);
      } else {
        const index = state.value.favourites.indexOf(id);
        state.value.favourites.splice(index, 1);
      }
    },
  },
});

export const { setNewState, toggleFavourites } = beersSlice.actions;

export default beersSlice.reducer;
