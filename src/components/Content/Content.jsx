import BeerItem from "../BeerItem/BeerItem";

import "./Content.scss";

const Content = ({ filteredInputData }) => {
  return (
    <div className="content">
      {filteredInputData
        ? filteredInputData.map((beer, index) => (
            <BeerItem key={beer.name + index} data={beer} />
          ))
        : "No data"}
    </div>
  );
};

export default Content;
