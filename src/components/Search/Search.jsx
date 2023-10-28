import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSearchPath } from "../../utils/searchFunction";
import "./Search.scss"
import { BiSearchAlt2 } from "react-icons/bi";

export function Search(props) {
  const {canCloseMenu} = props;
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && query != '') {
      e.preventDefault();
      canCloseMenu();
      let path = createSearchPath(query);
      navigate(`/search/${path}`);
      setQuery("");
      e.target.blur();
    }
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <form className="search_form">
      <input
        placeholder="Buscar película"
        onKeyDown={handleKeyPress}
        onChange={handleChange}
        value={query}
        className="search_input"
      />
      <BiSearchAlt2 className="icon_search" />
    </form>
  );
}
