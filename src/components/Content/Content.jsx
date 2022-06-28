import BeerItem from "../BeerItem/BeerItem";

import "./Content.scss";

const Content = ({ filteredInputData }) => {
  return (
    <div className="content">
      {filteredInputData.length > 0
        ? filteredInputData.map((beer, index) => (
            <BeerItem key={beer.name + index} data={beer} />
          ))
        : "No Beers"}
    </div>
  );
};

export default Content;
