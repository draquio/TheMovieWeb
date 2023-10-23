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

  async getTrendingSeries() {
    try {
      const url = `${ENV.Api_url}/${ENV.Api_Routes.trending}/tv/week?language=es-ES`;
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
}
