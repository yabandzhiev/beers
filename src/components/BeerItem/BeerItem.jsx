import "./BeerItem.scss";
import FavouriteButton from "./FavouriteButton/FavouriteButton";

const BeerItem = ({ data }) => {
  const name = data?.name;
  const description = data?.description;
  const image_url = data?.image_url;
  const favourite = data?.favourite;

  return (
    <div className="beer-item">
      <img className="beer-item__image" src={image_url} alt="Beer Image" />
      <FavouriteButton favourite={favourite} data={data} />
      <div className="beer-item__info">
        <h4 className="beer-item__info--title">{name}</h4>
        <p className="beer-item__info--description">{description}</p>
      </div>
    </div>
  );
};

export default BeerItem;
