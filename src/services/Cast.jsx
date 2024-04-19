import { getActors, getMovieDirectors, getSerieDirectors } from "../utils/castFunction";
import { ENV } from "../utils/constants";

export class Cast {
  async getMovieCast(id) {
    try {
      const url = `${ENV.Api_url}/movie/${id}/credits`;
      const params = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ENV.Token}`,
        },
      };
      const response = await fetch(url, params);
      if (response.status === 200) {
        const result = await response.json();
        const directors = getMovieDirectors(result.crew);
        const actors = getActors(result.cast, 10);
        return { directors, actors };
      }
      throw response;
    } catch (error) {
      throw error;
    }
  }

  async getSerieCast(id) {
    try {
      const url = `${ENV.Api_url}/tv/${id}/aggregate_credits`;
      const params = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ENV.Token}`,
        },
      };
      const response = await fetch(url, params);
      if (response.status === 200) {
        const result = await response.json();
        const directors = getSerieDirectors(result.crew, 5);
        const actors = getActors(result.cast, 10);
        return { directors, actors };
      }
      throw response;
    } catch (error) {
      throw error;
    }
  }

}
