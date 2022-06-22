import axios from "axios";

const BASE_URL = "https://api.punkapi.com/v2/beers";

const GET_RANDOM_BEER = "/random";

const axios = axios.create({ baseURL: BASE_URL });

export { axios, GET_RANDOM_BEER };
