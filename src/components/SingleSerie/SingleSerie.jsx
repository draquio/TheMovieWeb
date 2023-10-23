import { useEffect, useState } from "react";
import { Serie as SerieClass } from "../../services/Serie";
import { HeaderSerie } from "./HeaderSerie";
import { BodySerie } from "./BodySerie";
import { FooterSerie } from "./FooterSerie";
import { Cast as CastClass } from "../../services/Cast";

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
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  if (!serie && !cast) return <span className="loading loading-spinner loading-lg"></span>;
  return (
    <>
      <HeaderSerie cast={cast} serie={serie} />
      <BodySerie serie={serie} />
      <FooterSerie seasons={serie.seasons} />
    </>
  );
}
