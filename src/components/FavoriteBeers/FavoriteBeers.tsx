import { useSelector } from "../../store/store";

import Content from "../Content/Content";

import { beerProps } from "./types/FavoriteBeersTypes";

import "./FavoriteBeers.scss";

const FavoriteBeers = () => {
  const favoriteBeersIds = useSelector((state) => state.beers.value.favorites);
  const beers: beerProps[] = useSelector((state) => state.beers.value.beers);

  let beersToDisplay: beerProps[] = [];

  if (favoriteBeersIds.length > 0) {
    favoriteBeersIds.forEach((favBeerId) => {
      beers.forEach((beer) => {
        if (beer.id === favBeerId) {
          beersToDisplay.unshift(beer);
        }
      });
    });
  }

  return (
    <div className="favorites">
      <Content filteredData={beersToDisplay} />
    </div>
  );
};

export default FavoriteBeers;
