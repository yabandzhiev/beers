import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__bar">
        <span className="header__bar--logo">Beans Love Beers</span>

        <div className="header__bar--buttons">
          <span>Home</span>
          <span>Favorites</span>
          <span>Random Beer</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
