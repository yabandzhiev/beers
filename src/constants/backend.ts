import Axios from "axios";

const BASE_URL = "https://api.punkapi.com/v2/beers";

const GET_RANDOM_BEER = "/random";

const SEARCH_BEER = "?beer_name=";

const axios = Axios.create({ baseURL: BASE_URL });

export { axios, GET_RANDOM_BEER, SEARCH_BEER };
