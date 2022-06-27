import { useBeerActionsDispatch } from "../../../common/hooks/useActions";

import "./FavouriteButton.scss";

const FavouriteButton = ({ favourite, data }) => {
  const { toggleFavourites } = useBeerActionsDispatch();

  const toggleFav = () => {
    toggleFavourites(data);
  };
  return (
    <>
      {favourite ? (
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
