import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllBeersRequest,
  getRandomBeerRequest,
} from "../../api/beerRequests";

const initialState = {
  value: {
    beers: [],
    randomBeer: [],
    favorites: [],
    search: [],
  },
};

export const fetchData = createAsyncThunk("beers/getBeers", async () => {
  const result = await getAllBeersRequest();

  if (result?.data) {
    let data = [];
    for (let beer of result.data) {
      const { id, name, description, image_url } = beer;
      const favorite = false;
      data.push({ id, name, description, image_url, favorite });
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

const getIndexAndReplaceData = (arr, idToCompareWith, newArr) => {
  arr.find((beer) => {
    let index = -1;

    if (beer.id === idToCompareWith) {
      index = arr.indexOf(beer);
    }

    if (index !== -1) {
      arr.splice(index, 1, newArr);
    }

    return "";
  });
};

export const beersSlice = createSlice({
  name: "beers",
  initialState,

  reducers: {
    setNewSearchState: (state, action) => {
      //make new state with the beers from the search criteria
      let data = [];
      for (let beer of action.payload) {
        const { id, name, description, image_url } = beer;
        let favorite = false;
        for (let favBeerId of [...state.value.favorites]) {
          if (favBeerId === id) {
            favorite = true;
          }
        }
        data.push({ id, name, description, image_url, favorite });
      }
      state.value.search = data;
    },

    toggleFavorites: (state, action) => {
      let selectedBeer = action.payload;
      let dataFromState = state.value.beers;
      let dataFromSearch = state.value.search;
      let favoriteBeers = new Set(state.value.favorites);

      const { id, name, description, image_url, favorite } = selectedBeer;
      //new data object
      let newData = { id, name, description, image_url, favorite };

      //toggle favorite
      newData.favorite = !newData.favorite;

      //check if new data's favorite is true
      //if it is - add the beer id to the favorites state
      if (newData.favorite === true) {
        favoriteBeers.add(newData.id);
        state.value.favorites = [...favoriteBeers];
      }

      //check if beer id is in the favorites state
      //if it is - replace with the new data object
      favoriteBeers.forEach((favoriteBeerId) => {
        if (favoriteBeerId === selectedBeer.id) {
          getIndexAndReplaceData(dataFromState, favoriteBeerId, newData);
          getIndexAndReplaceData(dataFromSearch, favoriteBeerId, newData);
        }
      });

      //check if new data's favorite is false
      //if it is - remove the beer id from the favorites state
      if (newData.favorite === false) {
        favoriteBeers.delete(newData.id);
        state.value.favorites = [...favoriteBeers];
      }

      //check if beer exists in the beers state
      //if it doesn't - push it
      const beerExist = dataFromState.find(
        (beer) => beer.id === selectedBeer.id
      );

      if (!beerExist) {
        dataFromState.push(newData);
      }

      //replace randomBeer with newData's props, so it can render the changes
      state.value.randomBeer[0] = newData;
    },
  },

  extraReducers: (builder) => {
    // ------------------------------------ FETCH BEER PENDING REQUEST ------------------------------------
    builder.addCase(fetchData.pending, (state, action) => {
      return (state = {
        ...state,
        value: {
          beers: state.value.beers,
          randomBeer: state.value.randomBeer,
          favorites: state.value.favorites,
          search: state.value.search,
        },
      });
    });

    // ------------------------------------ FETCH BEER FULFILLED REQUEST ------------------------------------
    builder.addCase(fetchData.fulfilled, (state, action) => {
      //get beers data from api
      const dataFromReq = action.payload;
      const dataFromState = state.value.beers;
      const favoriteBeerIds = [...state.value.favorites];

      // every time we make a request to the api, we get raw data,
      // where we don't have the favorite prop,
      // so in order to keep our favorites logic running properly,
      // we are adding one more prop ('favorite') to all beers

      const idsFromReq = dataFromReq.map((x) => x.id);

      // get all ids that we don't have already in our state
      const newIds = dataFromState.filter(
        (beerFromState) => !idsFromReq.includes(beerFromState.id)
      );

      //make new array with all the new ids pushed
      const allBeers = [...dataFromReq];
      allBeers.push(...newIds);

      //check which beer is in favorites state and set the favorite prop accordingly
      dataFromReq.map((beerFromReq) => {
        return favoriteBeerIds.forEach((favBeerId) => {
          if (beerFromReq.id === favBeerId) {
            beerFromReq.favorite = true;
          }
        });
      });
      return (state = {
        ...state,
        value: {
          beers: allBeers,
          randomBeer: state.value.randomBeer,
          favorites: state.value.favorites,
          search: state.value.search,
        },
      });
    });

    // ------------------------------------ FETCH RANDOM BEER PENDING REQUEST ------------------------------------
    builder.addCase(fetchRandomBeer.pending, (state) => {
      const obj = {
        id: "",
        name: "",
        description: "",
        image_url: "",
        favorite: false,
      };
      return (state = {
        ...state,
        value: {
          beers: state.value.beers,
          randomBeer: obj,
          favorites: state.value.favorites,
          search: state.value.search,
        },
      });
    });
    // ------------------------------------ FETCH RANDOM BEER FULFILLED REQUEST ------------------------------------
    builder.addCase(fetchRandomBeer.fulfilled, (state, action) => {
      //get props from payload
      const { id, name, description, image_url } = action.payload;
      //get favorite beers from state
      const beersFromFavorite = state.value.favorites;

      let data = [];

      let favorite = false;

      //add favorite prop to the data
      data[0] = { id, name, description, image_url, favorite };

      //check if we have the beer in our favorites state
      beersFromFavorite.forEach((favoriteBeerId) => {
        if (favoriteBeerId === id) {
          data[0].favorite = true;
        }
      });

      return (state = {
        ...state,
        value: {
          beers: state.value.beers,
          randomBeer: data,
          favorites: state.value.favorites,
          search: state.value.search,
        },
      });
    });
  },
});

export const { setNewSearchState, toggleFavorites } = beersSlice.actions;

export default beersSlice.reducer;
