import "./SearchBox.scss";

import { searchTypes } from "./types/searchTypes";

const SearchBox = ({ userInput, handler }: searchTypes) => {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        className="search__input"
        placeholder="Search for a beer..."
        value={userInput}
        onChange={handler}
      />
    </div>
  );
};

export default SearchBox;
