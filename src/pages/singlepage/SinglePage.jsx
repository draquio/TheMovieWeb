import { useParams } from "react-router-dom";
import { SingleMovie, SingleSerie } from "../../components";

export function SinglePage() {
  const params = useParams();
  const { type, id } = params;
  return (
    <>
      {type === "movie" ? (
        <SingleMovie id={id} />
      ) : (
        <SingleSerie id={id} />
      )}
    </>
  );
}
