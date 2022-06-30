import { beerProps, dataProps } from "./types/types";

import BeerItem from "../BeerItem/BeerItem";

import "./Content.scss";

const Content = ({ filteredInputData }: dataProps) => {
  return (
    <div className="content">
      {filteredInputData.length > 0
        ? filteredInputData.map((beer: beerProps, index: number) => (
            <BeerItem key={beer.name + index} beer={beer} />
          ))
        : "No Beers"}
    </div>
  );
};

export default Content;
