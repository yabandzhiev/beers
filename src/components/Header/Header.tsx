import { NavLink, Outlet } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__bar">
          <span className="header__bar--logo">Beans Love Beers</span>

          <div className="header__bar--buttons">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              <span>Home</span>
            </NavLink>

            <NavLink to="favourites">
              <span>Favorites</span>
            </NavLink>

            <NavLink to="random">
              <span>Random Beers</span>
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
