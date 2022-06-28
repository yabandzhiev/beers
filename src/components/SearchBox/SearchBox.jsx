import "./SearchBox.scss";

const SearchBox = ({ userInput, handler }) => {
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
      <button className="search__button">Search</button>
    </div>
  );
};

export default SearchBox;
