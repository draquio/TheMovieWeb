import { useEffect, useState } from "react";
import "../../Movies/RecommendationMovie/Recommendation.scss";
import { Serie as SerieController } from "../../../services/Serie";
import { RecommendationSerieItem } from "./RecomendationSerieItem";


export function RecommendationSerie(props) {
  const { id } = props;
  const [recommendation, setRecommendation] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const serieController = new SerieController();
        const response = await serieController.getRecommendationSeries(id, 16);
        setRecommendation(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);
  if (!recommendation || recommendation.length === 0) return ""
  return (
    <div className="recommendation_section">
      <h2>Te puede interesar:</h2>
      <section className="recommendation_list_content">
        {recommendation.map((recommendation) => (
          <article key={recommendation.id} className="recommendation_item">
            <RecommendationSerieItem
              key={recommendation.id}
              recommendation={recommendation}
            />
          </article>
        ))}
      </section>
    </div>
  );
}
