import BeerItem from "../BeerItem/BeerItem";
import { useBeerActionsDispatch } from "../../common/hooks/useActions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const RandomBeers = () => {
  const { fetchRandomBeer } = useBeerActionsDispatch();
  const randomBeer = useSelector((state) => state.beers.value.randomBeer);
  //dispatch action to get random beer
  useEffect(() => {
    fetchRandomBeer();
  }, []);

  return <BeerItem data={randomBeer[0]} />;
};

export default RandomBeers;
