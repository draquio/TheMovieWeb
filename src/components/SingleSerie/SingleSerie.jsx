import { useEffect, useState } from "react";
import { Serie as SerieClass } from "../../services/Serie";
import { HeaderSerie } from "./HeaderSerie";
import { BodySerie } from "./BodySerie";
import { Cast as CastClass } from "../../services/Cast";
import { ENV } from "../../utils";
import { Loader } from "../Loader/Loader";
import { FooterSerie } from "./FooterSerie";


export function SingleSerie(props) {
  const { id } = props;
  const [serie, setSerie] = useState(null);
  const [cast, setCast] = useState(null);
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
  }, [id]);
  if (!serie && !cast) return <Loader />;
  return (
    <>
      <div className="bgtop"><img alt={`${serie.title} background`} src={`${ENV.Api_image_url_original}${serie.backdrop_path}`} /></div>
      <HeaderSerie cast={cast} serie={serie} />
      <BodySerie serie={serie} />
      <FooterSerie id={serie.id} />
    </>
  );
}
