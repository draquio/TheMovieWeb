import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";
import "../scss/menuToggle.scss"
import { Search } from "../Search";
import { useEffect, useState } from "react";
export function Nav() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [direction, setDirection] = useState(location || "/");
  const NavActive = () => {
    setIsActive(!isActive);
  };
  const CloseMenuFunction = () => {
    setIsActive(false);
  };

  useEffect(() => {
    setDirection(location.pathname);
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isActive, location]);

  return (
    <nav className="nav">
      <div className="logo">
        <Link to={"/"}>TheMovie</Link>
      </div>
      <div id="menuToggle" className="menu_mobile">
        <input id="checkbox" type="checkbox" checked={isActive} onChange={NavActive}/>
        <label className="toggle" htmlFor="checkbox">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>
      </div>

      <div className="nav_bar">
        <ul className="nav_bar_list">
          <li>
            <Link to={"/"} className={`${direction === "/" ? "active" : ""}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/movies"}
              className={`${direction === "/movies" ? "active" : ""}`}
            >
              Películas
            </Link>
          </li>
          <li>
            <Link
              to={"/series"}
              className={`${direction === "/series" ? "active" : ""}`}
            >
              Series
            </Link>
          </li>
          <li>
            <Search canCloseMenu={CloseMenuFunction} />
          </li>
        </ul>
      </div>
      <div
        className={`menuclose ${isActive ? "active" : ""}`}
        onClick={NavActive}
      ></div>
      <div className={`nav_bar_mobile ${isActive ? "active" : ""}`}>
        <ul className="nav_bar_list_mobile">
          <li>
            <Link
              to={"/"}
              className={`${direction === "/" ? "active" : ""}`}
              onClick={CloseMenuFunction}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/movies"}
              className={`${direction === "/movies" ? "active" : ""}`}
              onClick={CloseMenuFunction}
            >
              Películas
            </Link>
          </li>
          <li>
            <Link
              to={"/series"}
              className={`${direction === "/series" ? "active" : ""}`}
              onClick={CloseMenuFunction}
            >
              Series
            </Link>
          </li>
          <li>
            <Search canCloseMenu={CloseMenuFunction} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
