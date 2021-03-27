import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Meetups</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Favorites{" "}
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to='/todos'>Todos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
