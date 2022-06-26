import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllBeersRequest,
  getRandomBeerRequest,
} from "../../api/beerRequests";

const initialState = {
  value: {
    beers: [],
    randomBeer: [],
    favourites: [],
  },
};

export const fetchData = createAsyncThunk("beers/getBeers", async () => {
  const result = await getAllBeersRequest();

  if (result?.data) {
    let data = [];
    for (let beer of result.data) {
      const { id, name, description, image_url } = beer;
      const favourite = false;
      data.push({ id, name, description, image_url, favourite });
    }
    return data;
  }

  return result;
});

export const fetchRandomBeer = createAsyncThunk(
  "beers/getRandomBeer",
  async () => {
    const request = await getRandomBeerRequest();
    console.log(request);

    return request.data[0];
  }
);

export const beersSlice = createSlice({
  name: "beers",
  initialState,

  reducers: {
    setNewState: (state, action) => {
      state.value.beers = action.payload;
    },

    toggleFavourites: (state, action) => {
      let data = action.payload;
      let dataFromState = state.value.beers;
      let newdata = { ...data };
      newdata.favourite = !newdata.favourite;

      for (let beer of dataFromState) {
        if (beer.id === data.id) {
          if (newdata.favourite === false) {
            state.value.favourites = state.value.favourites.filter(
              (fav) => fav.id !== beer.id
            );
          } else {
            state.value.favourites.push(newdata);
          }

          const index = dataFromState.indexOf(beer);
          state.value.beers.splice(index, 1, newdata);
          state.value.randomBeer[0] = newdata;
          return;
        }
      }
      if (newdata.favourite === false) {
        state.value.favourites = state.value.favourites.filter(
          (fav) => fav.id !== newdata.id
        );
      } else {
        state.value.favourites.push(newdata);
      }
      state.value.randomBeer[0] = newdata;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const dataFromReq = action.payload;
      const dataFromState = state.value.beers;

      for (let beerFromReq of dataFromReq) {
        for (let beerFromState of dataFromState) {
          if (beerFromState.id === beerFromReq.id) {
            const index = dataFromReq.indexOf(beerFromReq);
            dataFromReq.splice(index, 1, beerFromState);
          }
        }
      }
      return (state = {
        ...state,
        value: {
          beers: dataFromReq,
          randomBeer: state.value.randomBeer,
          favourites: state.value.favourites,
        },
      });
    });
    builder.addCase(fetchRandomBeer.pending, (state, action) => {
      const obj = {
        id: "",
        name: "",
        description: "",
        image_url: "",
        favourite: false,
      };
      return (state = {
        ...state,
        value: {
          beers: state.value.beers,
          randomBeer: obj,
          favourites: state.value.favourites,
        },
      });
    });

    builder.addCase(fetchRandomBeer.fulfilled, (state, action) => {
      const { id, name, description, image_url } = action.payload;
      const beersFromFavourite = state.value.favourites;
      console.log(action.payload);
      let data = [];

      let favourite = false;

      data[0] = { id, name, description, image_url, favourite };
      for (let beer of beersFromFavourite) {
        if (beer.id === id) {
          data[0] = beer;
        }
      }

      console.log(data);

      return (state = {
        ...state,
        value: {
          beers: state.value.beers,
          randomBeer: data,
          favourites: state.value.favourites,
        },
      });
    });
  },
});

export const { setNewState, toggleFavourites } = beersSlice.actions;

export default beersSlice.reducer;
