import { useEffect, useState } from "react";
import { getAllBeersRequest } from "../../api/beerRequests";

import { useBeerActionsDispatch } from "../../common/hooks/useActions";

import BeerItem from "../BeerItem/BeerItem";

import "./Home.scss";

const Home = () => {
  const { setNewState } = useBeerActionsDispatch();
  const [beerObj, setBeerObj] = useState({});
  useEffect(() => {
    const request = async () => {
      const result = await getAllBeersRequest();
      if (result?.data) {
        let data = [];
        for (let beer of result.data) {
          const { id, name, description, image_url } = beer;
          data.push({ id, name, description, image_url });
        }
        setBeerObj(data);
        setNewState(data);
      }

      return result;
    };
    request();
  }, []);

  return (
    <div className="home">
      <div className="search">
        <input
          type="text"
          name="search"
          className="input"
          placeholder="Search for a beer..."
        />
        <button className="button">Search</button>
      </div>

      <div className="content">
        {Object.keys(beerObj).length > 0
          ? beerObj.map((beer) => <BeerItem key={beer.id} data={beer} />)
          : "No data"}
      </div>
    </div>
  );
};

export default Home;
