import { axios, GET_RANDOM_BEER, SEARCH_BEER } from "../constants/backend";

const getAllBeersRequest = async () => {
  try {
    const beersData = await axios.get(`/`);
    return beersData;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

const getRandomBeerRequest = async () => {
  try {
    const randomBeerData = await axios.get(`${GET_RANDOM_BEER}`);
    return randomBeerData;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

const getBeerFromSearchRequest = async (input: string) => {
  const formattedInput = input.replaceAll(" ", "_");
  try {
    const beerFromSearch = await axios.get(`${SEARCH_BEER}${formattedInput}`);
    return beerFromSearch;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export { getAllBeersRequest, getRandomBeerRequest, getBeerFromSearchRequest };
