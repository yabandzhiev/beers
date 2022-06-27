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
      //get data from payload
      let data = action.payload;
      //get data from state
      let dataFromState = state.value.beers;
      //new data object
      let newData = { ...data };
      newData.favourite = !newData.favourite;

      //check if beer is in the state
      //if it is - replace with the new data
      for (let beer of dataFromState) {
        if (beer.id === data.id) {
          const index = dataFromState.indexOf(beer);
          state.value.beers.splice(index, 1, newData);
        }
      }
      //check if new data's favourite is false
      //if it is - remove the beer from favourites state
      //if it is true - add the beer to the favourites state
      if (newData.favourite === false) {
        state.value.favourites = state.value.favourites.filter(
          (fav) => fav.id !== newData.id
        );
      } else {
        state.value.favourites.push(newData);
      }
      //replace randomBeer with newData's props, so it can render the changes
      state.value.randomBeer[0] = newData;
    },
  },

  extraReducers: (builder) => {
    //Fetch data pending
    builder.addCase(fetchData.pending, (state, action) => {
      return (state = {
        ...state,
        value: {
          beers: state.value.beers,
          randomBeer: state.value.randomBeer,
          favourites: state.value.favourites,
        },
      });
    });

    //Fetch data fulfilled
    builder.addCase(fetchData.fulfilled, (state, action) => {
      //get data from payload
      const dataFromReq = action.payload;
      //get data from state
      const dataFromState = state.value.beers;

      //every time we make a request to the api, we get raw data, so in order to keep our favourites displayed on load, we are replacing every beer's(from the request) favourite prop with what we have in the state,
      for (let beerFromReq of dataFromReq) {
        for (let beerFromState of dataFromState) {
          if (beerFromState.id === beerFromReq.id) {
            beerFromReq.favourite = beerFromState.favourite;
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

    //Fetch random beer pending
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
    //Fetch random beer fulfilled
    builder.addCase(fetchRandomBeer.fulfilled, (state, action) => {
      //get props from payload
      const { id, name, description, image_url } = action.payload;
      //get favourite beers from state
      const beersFromFavourite = state.value.favourites;

      let data = [];

      let favourite = false;

      //add favourite prop to the data
      data[0] = { id, name, description, image_url, favourite };

      //check if we have the beer in our favourites state
      for (let beer of beersFromFavourite) {
        if (beer.id === id) {
          data[0] = beer;
        }
      }

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
