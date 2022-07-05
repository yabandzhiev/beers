import { useBeerActionsDispatch } from "../../../common/hooks/useActions";

import "./FavoriteButton.scss";

import { beerProps } from "../types/beerType";

const FavoriteButton = ({ beer }: beerProps) => {
  const { toggleFavorites } = useBeerActionsDispatch();

  const toggleFav = () => {
    toggleFavorites(beer);
  };
  return (
    <>
      {beer?.favorite ? (
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

export default FavoriteButton;
