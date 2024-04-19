import { useParams } from "react-router-dom";
import { Movie } from "../../services/Movie";
import { useEffect, useState } from "react";
import "./Search.scss";
import { createQueryFromPath } from "../../utils/searchFunction";
import { Background, Emptydata } from "../../components";
import { SearchList } from "../../components/Search";
export function Search() {
  const params = useParams();
  const query = createQueryFromPath(params.query);
  const [searchlist, setSearchlist] = useState(null);
  console.log(searchlist);
  console.log(query);
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
  if (searchlist.length === 0) return <Emptydata data={`resultados de "${query}"`} />;
  return (
    <>
      <SearchList searchlist={searchlist} query={query} />
      <Background movie={searchlist[0]} />
    </>
  );
}
