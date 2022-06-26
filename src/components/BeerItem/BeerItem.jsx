import "./BeerItem.scss";

import { useBeerActionsDispatch } from "../../common/hooks/useActions";

const BeerItem = ({ data }) => {
  const { toggleFavourites } = useBeerActionsDispatch();
  const name = data?.name;
  const description = data?.description;
  const image_url = data?.image_url;
  const favourite = data?.favourite;

  const toggleFav = () => {
    toggleFavourites(data);
  };

  return (
    <div className="beer-item">
      <img className="beer-item__image" src={image_url} alt="Beer Image" />
      <div className="beer-item__info">
        {favourite ? (
          <span onClick={toggleFav}>&#x2605;</span>
        ) : (
          <span onClick={toggleFav}>&#x2606;</span>
        )}
        <h4 className="beer-item__info--title">{name}</h4>
        <p className="beer-item__info--description">{description}</p>
      </div>
    </div>
  );
};

export default BeerItem;
