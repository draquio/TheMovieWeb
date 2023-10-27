import { Emptydata } from "../Emptydata";
import { Loader } from "../Loader/Loader";
import "./Inside.scss";
import { InsideItem } from "./InsideItem";
export function TrailerInside(props) {
  const { trailers } = props;
  if (!trailers) return <Loader />
  if (trailers.length === 0) return <Emptydata data={"Trailers"} />
  return (
    <>
      {trailers.map((trailer) => (
        <InsideItem key={trailer.key} video={trailer} />
      ))}
    </>
  );
}
