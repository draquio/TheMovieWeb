import { useState, useEffect } from "react";
import "./PopularSeries.scss";
import { Serie as SerieClass } from "../../../services/Serie";
import { PopularSeriesItem } from "./PopularSeriesItem";
import { Pagination } from "../../pagination";
import { useNavigate, useSearchParams } from "react-router-dom";

export function PopularSeries() {
  const [series, setSeries] = useState(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || 1)
  useEffect(() => {
    (async () => {
      try {
        let seriesController = new SerieClass();
        const response = await seriesController.getPopularSeries(page);
        if (response) {
          setSeries(response);
        }
        window.scrollTo(0, 0);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page]);
  const PaginationValueReceived = (actualpage) => {
    setPage(actualpage);
    navigate(`?page=${actualpage}`)
  }
  if (!series)
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <>
      <div className="title_contaniner">
        <h2 className="title_section">Series populares</h2>
      </div>
      <section className="movies_list_content">
        {series.map((serie) => (
          <article key={serie.id} className="movie_item">
            <PopularSeriesItem serie={serie} />
          </article>
        ))}
      </section>
       <Pagination PaginationValue={PaginationValueReceived}  actualpage={page} />
    </>
  );
}
