import {Link} from "react-router-dom"
import "./Nav.scss";
import { Search } from "../Search";
export function Nav() {
  return (
    <nav className="nav_bar">
      <div className="logo">TheMovie</div>
        <ul className="nav_bar_list">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/movies"}>Películas</Link></li>
            <li><Link to={"/series"}>Series</Link></li>
            <li><Search /></li>
        </ul>
    </nav>
  )
}
