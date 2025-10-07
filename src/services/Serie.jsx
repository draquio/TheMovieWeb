import { ENV } from "../utils/constants";
import { formatAllSeries } from "../utils/seriesFunction";
export class Serie {
  async getPopularSeries(page = 1) {
    try {
      const url = `${ENV.Api_url}/tv/${ENV.Api_Routes.popular}?language=es-ES&page=${page}`;
      const params = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ENV.Token}`,
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();
      const mapseries = formatAllSeries(result.results);
      if (response.status === 200) {
        return mapseries;
      } else {
        throw mapseries;
      }
    } catch (error) {
      throw error;
    }
  }

  async getSingleSerie(id) {
    try {
      const url = `${ENV.Api_url}/tv/${id}?language=es-ES`;
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
        return result;
      } else {
        throw result;
      }
    } catch (error) {
      throw error;
    }
  }

  async getSingleOverviewSerie(id) {
    try {
      const url = `${ENV.Api_url}/tv/${id}`;
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
        return result.overview;
      } else {
        throw result;
      }
    } catch (error) {
      throw error;
    }
  }

  async getTrendingSeries(page = 1) {
    try {
      const url = `${ENV.Api_url}/${ENV.Api_Routes.trending}/tv/week?language=es-ES&page=${page}`;
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
        const mapseries = formatAllSeries(result.results);
        return mapseries;
      }
      throw result;
    } catch (error) {
      console.error(error);
    }
  }

  async getPopularSeriesByGenre(page = 1, genreId = 10759) {
    try {
      const url = `${ENV.Api_url}/${ENV.Api_Routes.discover}/tv?language=es-ES&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`;
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
        const mapmovie = formatAllSeries(result.results);
        return mapmovie;
      }
      throw response;
    } catch (error) {
      console.error(error);
    }
  }

    async getRecommendationSeries(id, limit = 4) {
      try {
        const url = `${ENV.Api_url}/tv/${id}/${ENV.Api_Routes.recommendation}?language=es-ES`;
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
          const mapseries = formatAllSeries(result.results);
          return mapseries.slice(0, limit);
        }
        throw response;
      } catch (error) {
        console.error(error);
      }
    }
}
