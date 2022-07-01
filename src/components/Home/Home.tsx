import React, { FC, useEffect, useState } from "react";

import { useSelector } from "../../store/store";
import { getBeerFromSearchRequest } from "../../api/beerRequests";
import useDebounce from "../../common/hooks/useDebounce";

import { useBeerActionsDispatch } from "../../common/hooks/useActions";

import Content from "../Content/Content";
import SearchBox from "../SearchBox/SearchBox";
import Metamask from "../Metamask/Metamask";

import { homeProps } from "./types/homeTypes";

import "./Home.scss";
import LogoutButton from "../LogoutButton/LogoutButton";

const Home: FC<homeProps> = ({ locked }) => {
  const { fetchData, setNewState } = useBeerActionsDispatch();

  const beersObj = useSelector((state) => state.beers.value);
  const [userInput, setUserInput] = useState("");

  const debouncedSearch = useDebounce(userInput, 300);

  //load data from api
  useEffect(() => {
    if (!locked) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!userInput]);

  //debounce search useEffect
  //filter the data based on user's input
  useEffect(() => {
    if (debouncedSearch) {
      getBeerFromSearchRequest(debouncedSearch).then((result) => {
        setNewState(result?.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="home">
      {locked ? (
        <Metamask locked={locked} />
      ) : (
        <>
          <LogoutButton />

          <SearchBox userInput={userInput} handler={onInputChange} />

          <Content filteredInputData={beersObj.beers} />
        </>
      )}
    </div>
  );
};

export default Home;
