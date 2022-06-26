import "./SearchBox.scss";

const SearchBox = ({ userInput, handler }) => {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        className="input"
        placeholder="Search for a beer..."
        value={userInput}
        onChange={handler}
      />
    </div>
  );
};

export default SearchBox;
