import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/marvel/characters/list"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Marvel Characters List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="marvel/fav/chars/list"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Favourite Characters List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
