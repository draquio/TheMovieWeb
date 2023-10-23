import { useEffect, useState } from "react"
import { Serie as SerieClass } from "../../../services/Serie";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import {TrendingSerieItem} from "./TrendingSerieItem"


export function TrendingSerie() {
    const [series,setSeries] = useState(null);

    useEffect(()=>{
        (async () =>{
            try {
                const serieController = new SerieClass();
                const response = await serieController.getTrendingSeries();
                const limitseries = response.slice(0,12);
                setSeries(limitseries);
            } catch (error) {
                console.log(error);
            }
        })()
    },[])
    if (!series)
    return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <>
      <div className="title_contaniner">
        <h2 className="title_section">Tendencias en Series</h2>
        <Link to={"/series"} className="view_more">
          <AiOutlinePlus className="icon_title" /> Ver más
        </Link>
      </div>
      <section className="movies_list_content">
        {series.map((serie) => (
          <article key={serie.id} className="movie_item">
            <TrendingSerieItem serie={serie} />
          </article>
        ))}
      </section>
    </>
  );
}
