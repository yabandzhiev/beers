import { useSelector } from "react-redux";

import Content from "../Content/Content";

import "./FavouriteBeers.scss";

const FavouriteBeers = () => {
  const favourites = useSelector((state) => state.beers.value.favourites);

  return (
    <div className="favourites">
      <Content filteredInputData={favourites} />
    </div>
  );
};

export default FavouriteBeers;
