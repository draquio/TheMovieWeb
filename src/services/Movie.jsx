import { ENV } from "../utils";
import { formatAllMovie, formatSearch } from "../utils/moviesFunction";

export class Movie {
  async getPopularMovies(page= 1) {
    try {
      const url = `${ENV.Api_url}/movie/${ENV.Api_Routes.popular}?language=es-ES&page=${page}`;
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
        const mapmovie = formatAllMovie(result.results);
        return mapmovie;
      }
      throw response;
    } catch (error) {
      console.error(error);
    }
  }

  async getUpComingMovies(page = 1) {
    try {
      const url = `${ENV.Api_url}/movie/${ENV.Api_Routes.now_playing}?language=es-ES&page=${page}`;
      console.log(url);
      const params = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ENV.Token}`,
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();

      const mapmovies = formatAllMovie(result.results);
      if (response.status === 200) {
        return mapmovies;
      } else {
        throw result;
      }
    } catch (error) {
      return error;
    }
  }


  async Search(query, page = 1) {
    try {
      const url = `${ENV.Api_url}/search/multi?query=${query}&include_adult=false&language=es-ES&page=${page}`;
      const params = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${ENV.Token}`,
        },
      };
      const response = await fetch(url, params);
      const result = await response.json();
      const mapmovies = formatSearch(result.results);
      if (response.status === 200) {
        return mapmovies;
      } else {
        throw result;
      }
    } catch (error) {
      return error;
    }
  }


  async getSingleMovie(id) {
    try {
      const url = `${ENV.Api_url}/movie/${id}?language=es-ES`;
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
      return error;
    }
  }

  async getSimilarMovies(id, page= 1) {
    try {
      const url = `${ENV.Api_url}/movie/${id}/${ENV.Api_Routes.similar}?language=es-ES&page=${page}`;
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
        const mapmovie = formatAllMovie(result.results);
        return mapmovie;
      }
      throw response;
    } catch (error) {
      console.error(error);
    }
  }
  async getTrendingMovies() {
    try {
      const url = `${ENV.Api_url}/${ENV.Api_Routes.trending}/movie/week?language=es-ES`;
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
        const mapmovies = formatAllMovie(result.results);
        return mapmovies;
      }
      throw result;
    } catch (error) {
      console.error(error);
    }
  }

}
