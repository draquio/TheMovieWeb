import { useEffect, useState } from "react";
import { Serie as SerieClass } from "../../services/Serie";
import { HeaderSerie } from "./HeaderSerie";
import { BodySerie } from "./BodySerie";
import { Cast as CastClass } from "../../services/Cast";
import { ENV } from "../../utils";

export function SingleSerie(props) {
  const { id } = props;
  const [serie, setSerie] = useState(null);
  const [cast, setCast] = useState(null);
  console.log(serie);
  useEffect(() => {
    (async () => {
      try {
        const serieController = new SerieClass();
        const response = await serieController.getSingleSerie(id);
        setSerie(response);
        if (response.overview === "") {
          const overviewenglish = await serieController.getSingleOverviewSerie(
            id
          );
          setSerie({ ...response, overview: overviewenglish });
        }
        const castController = new CastClass();
        const responsecast = await castController.getSerieCast(id);
        setCast(responsecast);
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Scroll suave
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  if (!serie && !cast) return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <>
      <div className="bgtop"><img alt={serie.title} src={`${ENV.Api_image_url_backgroud}${serie.backdrop_path}`} /></div>
      <HeaderSerie cast={cast} serie={serie} />
      <BodySerie serie={serie} />
    </>
  );
}
