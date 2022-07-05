import { ReactComponent as BeerImageDefault } from "../../../assets/beer/beer.svg";

import "./BeerImage.scss";

type asd = {
  image_url: string | undefined;
  play: () => void;
};

const BeerImage = ({ image_url, play }: asd) => {
  return image_url ? (
    <img
      className="beer-item__image"
      src={image_url}
      alt="Beer"
      onClick={() => play()}
    />
  ) : (
    <BeerImageDefault className="beer-item__image" onClick={() => play()} />
  );
};

export default BeerImage;
