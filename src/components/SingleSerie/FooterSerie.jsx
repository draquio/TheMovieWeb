import { RecommendationSerie } from "../Series/RecomendationSeries";

export function FooterSerie(props) {
    const {id} = props;
  return (
    <RecommendationSerie id={id} />
  )
}
