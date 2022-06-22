import "./BeerItem.scss";

const BeerItem = ({ data }) => {
  const { name, description, image_url } = data;
  return (
    <div className="beer-item">
      <img className="beer-item__image" src={image_url} alt="Beer Image" />
      <div className="beer-item__info">
        <h4 className="beer-item__info--title">{name}</h4>
        <p className="beer-item__info--description">{description}</p>
      </div>
    </div>
  );
};

export default BeerItem;
