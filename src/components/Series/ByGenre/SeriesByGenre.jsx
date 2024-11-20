import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PopularSeriesItem } from "../Popular/PopularSeriesItem";
import { Genre } from "../../Genre";
import { Loader } from "../../Loader/Loader";
import { Pagination } from "../../pagination";
import { Background } from "../../Background";
import { Serie as SerieClass } from "../../../services/Serie";

export function SeriesByGenre(props) {
  const { id, name } = props;
  const [series, setSeries] = useState(null);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  useEffect(() => {
    (async () => {
      try {
        const serieController = new SerieClass();
        const response = await serieController.getPopularSeriesByGenre(
          page,
          id
        );
        setSeries(response);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id, page]);
  if (!series || series.length === 0) return <Loader />;
  return (
    <>
      <div className="title_contaniner">
        <h2 className="title_section">Series - {name}</h2>
      </div>
      <Genre type="tv" />
      <section className="movies_list_content">
        {series.map((serie) => (
          <article key={serie.id} className="movie_item">
            <PopularSeriesItem serie={serie} />
          </article>
        ))}
      </section>
      <Pagination />
      <Background movie={series[0]} />
    </>
  );
}
