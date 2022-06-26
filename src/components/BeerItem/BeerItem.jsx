import { useBeerActionsDispatch } from "../../common/hooks/useActions";

import "./BeerItem.scss";

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
      {favourite ? (
        <span className="star" onClick={toggleFav}>
          &#x2605;
        </span>
      ) : (
        <span className="star" onClick={toggleFav}>
          &#x2606;
        </span>
      )}
      <div className="beer-item__info">
        <h4 className="beer-item__info--title">{name}</h4>
        <p className="beer-item__info--description">{description}</p>
      </div>
    </div>
  );
};

export default BeerItem;
