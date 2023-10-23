import { ENV } from "../utils";
export class Genres {
  async getGenres() {
    try {
      const url = `${ENV.Api_url}/genre/movie/list`;
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
      }
    } catch (error) {
      throw result;
    }
  }
}
