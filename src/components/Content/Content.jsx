import BeerItem from "../BeerItem/BeerItem";
import "./Content.scss";

const random = () => {
  return Math.floor(Math.random() * 1138176387468176418);
};

const Content = ({ filteredInputData }) => {
  return (
    <div className="content">
      {filteredInputData
        ? filteredInputData.map((beer) => (
            <BeerItem key={random()} data={beer} />
          ))
        : "No data"}
    </div>
  );
};

export default Content;
