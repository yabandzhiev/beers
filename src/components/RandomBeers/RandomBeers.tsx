import { useEffect } from "react";

import { useBeerActionsDispatch } from "../../common/hooks/useActions";
import { useSelector } from "../../store/store";

import BeerItem from "../BeerItem/BeerItem";

const RandomBeers = () => {
  const { fetchRandomBeer } = useBeerActionsDispatch();
  const randomBeer = useSelector((state) => state.beers.value.randomBeer);

  //dispatch action to get random beer
  useEffect(() => {
    fetchRandomBeer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <BeerItem beer={randomBeer[0]} />;
};

export default RandomBeers;
