import { SearchList } from "../../components/Search";
import { useParams } from "react-router-dom";
import { Movie } from "../../services/Movie";
import { useEffect, useState } from "react";
import "./Search.scss";
import { createQueryFromPath } from "../../utils/SearchFunction";
export function Search() {
  const params = useParams();
  const query = createQueryFromPath(params.query);
  const [searchlist, setSearchlist] = useState(null);
  useEffect(() => {
    (async () => {
      const movieController = new Movie();
      const response = await movieController.Search(query);
      if (response) {
        setSearchlist(response);
      }
    })();
  }, [query]);

  if (!searchlist) return <div className="loader"></div>;
  if (searchlist.length === 0) return "No hay resultados";
  return <SearchList searchlist={searchlist} query={query} />;
}
