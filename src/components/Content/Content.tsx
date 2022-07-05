import { beerProps, dataProps } from "./types/types";

import BeerItem from "../BeerItem/BeerItem";

import "./Content.scss";

const Content = ({ filteredData }: dataProps) => {
  return (
    <div className="content">
      {filteredData.length > 0
        ? filteredData.map((beer: beerProps, index: number) => (
            <BeerItem key={beer.name + index} beer={beer} />
          ))
        : "No Beers"}
    </div>
  );
};

export default Content;
