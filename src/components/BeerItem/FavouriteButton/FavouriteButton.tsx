import { useBeerActionsDispatch } from "../../../common/hooks/useActions";

import "./FavouriteButton.scss";

import { beerProps } from "../types/beerType";

const FavouriteButton = ({ beer }: beerProps) => {
  const { toggleFavourites } = useBeerActionsDispatch();

  const toggleFav = () => {
    toggleFavourites(beer);
  };
  return (
    <>
      {beer?.favourite ? (
        <span className="star" onClick={toggleFav}>
          &#x2605;
        </span>
      ) : (
        <span className="star-blue" onClick={toggleFav}>
          &#x2606;
        </span>
      )}
    </>
  );
};

export default FavouriteButton;
