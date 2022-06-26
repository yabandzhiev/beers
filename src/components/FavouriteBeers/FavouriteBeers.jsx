import { useSelector } from "react-redux";
import Content from "../Content/Content";

const FavouriteBeers = () => {
  const favourites = useSelector((state) => state.beers.value.favourites);

  return <Content filteredInputData={favourites} />;
};

export default FavouriteBeers;
