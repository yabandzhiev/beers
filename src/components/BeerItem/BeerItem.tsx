import useSound from "use-sound";

import beerSound from "../../assets/sound/can-open-3.mp3";

import FavouriteButton from "./FavouriteButton/FavouriteButton";

import "./BeerItem.scss";

import { beerProps } from "./types/beerType";

const BeerItem = ({ beer }: beerProps) => {
  //get all props separately with "?" otherwise it throws error at random beers page
  const name = beer?.name;
  const description = beer?.description;
  const image_url = beer?.image_url;

  //play beer sound on image click
  const [play] = useSound(beerSound);

  return (
    <div className="beer-item">
      <img
        className="beer-item__image"
        src={image_url}
        alt="Beer"
        onClick={() => play()}
      />

      <FavouriteButton beer={beer} />

      <div className="beer-item__info">
        <h4 className="beer-item__info--title">{name}</h4>
        <p className="beer-item__info--description">{description}</p>
      </div>
    </div>
  );
};

export default BeerItem;
