import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useBeerActionsDispatch } from "../../common/hooks/useActions";

import BeerItem from "../BeerItem/BeerItem";

const RandomBeers = () => {
  const { fetchRandomBeer } = useBeerActionsDispatch();
  const randomBeer = useSelector((state) => state.beers.value.randomBeer);

  //dispatch action to get random beer
  useEffect(() => {
    fetchRandomBeer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <BeerItem data={randomBeer[0]} />;
};

export default RandomBeers;
