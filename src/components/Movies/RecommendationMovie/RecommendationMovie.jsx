import React, { useEffect, useState } from "react";
import { Movie as MovieClass } from "../../../services/Movie";
import { RecommendationMovieItem } from "./RecommendationMovieItem";
import "./Recommendation.scss";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export function RecommendationMovie(props) {
  const { id } = props;
  const [recommendation, setRecommendation] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const movieController = new MovieClass();
        const response = await movieController.getRecommendationMovies(id, 6);
        setRecommendation(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);
  if (!recommendation || recommendation.length === 0) return ""
  return (
    // <LazyLoadComponent>
    <div className="recommendation_section">
      <h2>Te puede interesar:</h2>
      <section className="recommendation_list_content">
        {recommendation.map((recommendation) => (
          <article key={recommendation.id} className="recommendation_item">
            <RecommendationMovieItem
              key={recommendation.id}
              recommendation={recommendation}
            />
          </article>
        ))}
      </section>
    </div>
    // </LazyLoadComponent>
  );
}
