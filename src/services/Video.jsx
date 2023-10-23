import { ENV } from "../utils";
import { getFilterVideo } from "../utils/videoFunction";

export class Video{
  async getVideos(idmovie, type) {
    try {
      const url = `${ENV.Api_url}/${type}/${idmovie}/videos?language=es-ES`;
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
        const trailers = getFilterVideo(result.results,"Trailer")
        const teasers = getFilterVideo(result.results,"Teaser")
        return {trailers, teasers};
      } else {
        throw result;
      }
    } catch (error) {
      throw error;
    }
  }
}
