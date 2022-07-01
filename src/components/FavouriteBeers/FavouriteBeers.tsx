import { useSelector } from "../../store/store";

import Content from "../Content/Content";

import "./FavouriteBeers.scss";

const FavouriteBeers = () => {
  //get favourite beers from state
  const favourites = useSelector((state) => state.beers.value.favourites);

  return (
    <div className="favourites">
      <Content filteredInputData={favourites} />
    </div>
  );
};

export default FavouriteBeers;
