import { ENV, formatAllGenres } from "../utils";
export class Genre {
  async getGenres(type = "movie") {
    try {
      const url = `${ENV.Api_url}/genre/${type}/list?language=es`;
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
        const mapGenre = formatAllGenres(result.genres);
        return mapGenre;
      }
    } catch (error) {
      throw result;
    }
  }
}
