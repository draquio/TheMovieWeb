import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSearchPath } from "../../utils/SearchFunction";

export function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && query != '') {
      e.preventDefault();
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
      />
    </form>
  );
}
