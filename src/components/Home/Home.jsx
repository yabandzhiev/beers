import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllBeersRequest } from "../../api/beerRequests";

import { useBeerActionsDispatch } from "../../common/hooks/useActions";

import BeerItem from "../BeerItem/BeerItem";

import "./Home.scss";

const Home = () => {
  const { setNewState } = useBeerActionsDispatch();
  const beersObj = useSelector((state) => state.beers.value);
  const beers = beersObj.beers;

  useEffect(() => {
    request();
  }, []);

  //request data from api
  const request = async () => {
    const result = await getAllBeersRequest();
    if (result?.data) {
      let data = [];
      for (let beer of result.data) {
        const { id, name, description, image_url } = beer;
        data.push({ id, name, description, image_url });
      }
      //dispatch to set new state in redux store
      setNewState(data);
    }

    return result;
  };

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
        {Object.keys(beers).length > 0
          ? beers.map((beer) => <BeerItem key={beer.id} data={beer} />)
          : "No data"}
      </div>
    </div>
  );
};

export default Home;
