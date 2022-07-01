import { useEffect } from "react";

import { useBeerActionsDispatch } from "../../common/hooks/useActions";
import { useSelector } from "../../store/store";

import BeerItem from "../BeerItem/BeerItem";

import "./RandomBeer.scss";

const RandomBeers = () => {
  //get random beer from api and save it to state
  const { fetchRandomBeer } = useBeerActionsDispatch();

  //get the random beer from state
  const randomBeer = useSelector((state) => state.beers.value.randomBeer);

  //dispatch action to get random beer
  useEffect(() => {
    fetchRandomBeer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="randomBeer">
      <BeerItem beer={randomBeer[0]} />
    </div>
  );
};

export default RandomBeers;
