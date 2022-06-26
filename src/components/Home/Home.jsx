import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useBeerActionsDispatch } from "../../common/hooks/useActions";

import Content from "../Content/Content";
import SearchBox from "../SearchBox/SearchBox";

import "./Home.scss";

const Home = () => {
  const { fetchData } = useBeerActionsDispatch();
  const beersObj = useSelector((state) => state.beers.value);
  const [userInput, setUserInput] = useState("");

  //load data from api
  useEffect(() => {
    fetchData();
  }, []);

  const onInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const filteredInputData = !userInput
    ? beersObj.beers
    : beersObj.beers.filter((beer) => {
        return beer.name.toLowerCase().includes(userInput.toLowerCase());
      });

  return (
    <div className="home">
      <SearchBox userInput={userInput} handler={onInputChange} />

      <Content filteredInputData={filteredInputData} />
    </div>
  );
};

export default Home;
