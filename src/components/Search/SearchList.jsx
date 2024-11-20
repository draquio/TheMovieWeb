import { Background } from "../Background";
import { Pagination } from "../pagination";
import { SearchItem } from "./SearchItem";

export function SearchList(props) {
  const { searchlist, query } = props;
  return (
    <>
      <div className="title_contaniner">
        <h2 className="title_section">Búsqueda: {query}</h2>
      </div>
      <section className="movies_list_content">
        {searchlist.map((movie) => (
          <article key={movie.id} className="movie_item">
            <SearchItem movie={movie} />
          </article>
        ))}
      </section>
      <Background movie={searchlist[0]} />
    </>
  );
}
