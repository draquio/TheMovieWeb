import { useState, useEffect } from "react";
import "./PopularSeries.scss";
import { Serie as SerieClass } from "../../../services/Serie";
import { PopularSeriesItem } from "./PopularSeriesItem";
import { Pagination } from "../../pagination";
import { Link, useSearchParams } from "react-router-dom";
import { Loader } from "../../Loader/Loader";
import { Background } from "../../Background";
import { Genre } from "../../Genre";
import { AiOutlinePlus } from "react-icons/ai";

export function PopularSeries() {
  const [series, setSeries] = useState(null);
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  useEffect(() => {
    (async () => {
      try {
        if (page < 1) window.location.href = "/series";
        let seriesController = new SerieClass();
        const response = await seriesController.getTrendingSeries(page);
        setSeries(response);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page]);
  if (!series || series.length === 0) return <Loader />;
  return (
    <>
      <div className="title_contaniner">
        <h2 className="title_section">Series populares</h2>
        <Link to={"/genre/tv/Action%20&%20Adventure/10759"} className="view_more"> <AiOutlinePlus className="icon_title"/> Géneros</Link>
      </div>
      <div className="with_sidebar">
        <section className="movies_list_content">
          {series.map((serie) => (
            <article key={serie.id} className="movie_item">
              <PopularSeriesItem serie={serie} />
            </article>
          ))}
        </section>
          {/* <Genre type={"tv"} /> */}
      </div>
      <Pagination />
      <Background movie={series[0]} />
    </>
  );
}
