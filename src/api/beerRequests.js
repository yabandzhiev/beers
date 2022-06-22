import { axios, GET_RANDOM_BEER } from "../constants/backend";

const getAllBeersRequest = async () => {
  try {
    const beersData = await axios.get(`/`);
    return beersData;
  } catch (error) {
    console.log(error.message);
  }
};

const getRandomBeerRequest = async () => {
  try {
    const randomBeerData = await axios.get(`${GET_RANDOM_BEER}`);
    return randomBeerData;
  } catch (error) {
    console.log(error.message);
  }
};

export { getAllBeersRequest, getRandomBeerRequest };
