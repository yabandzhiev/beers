import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBeerFromSearchRequest } from "../../api/beerRequests";
import useDebounce from "../../common/hooks/useDebounce";

import { useBeerActionsDispatch } from "../../common/hooks/useActions";

import Content from "../Content/Content";
import SearchBox from "../SearchBox/SearchBox";

import "./Home.scss";

const Home = () => {
  const { fetchData, setNewState } = useBeerActionsDispatch();
  const beersObj = useSelector((state) => state.beers.value);
  const [userInput, setUserInput] = useState("");
  const debouncedSearch = useDebounce(userInput, 300);

  //load data from api

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!userInput]);

  //debounce search useEffect
  //filter the data based on user's input
  useEffect(() => {
    if (debouncedSearch) {
      getBeerFromSearchRequest(debouncedSearch).then((result) => {
        setNewState(result.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const onInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="home">
      <SearchBox userInput={userInput} handler={onInputChange} />

      <Content filteredInputData={beersObj.beers} />
    </div>
  );
};

export default Home;
