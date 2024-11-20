export const ENV = {
  Api_url: "https://api.themoviedb.org/3",
  Token: import.meta.env.VITE_API_TOKEN,
  Api_image_url_original: "https://image.tmdb.org/t/p/original",
  Api_image_url_backgroud: "https://image.tmdb.org/t/p/w780",
  Api_image_url: "https://image.tmdb.org/t/p/w342",
  Api_Routes: {
    popular: "popular",
    top_rated: "top_rated",
    now_playing: "now_playing",
    search: "search",
    trending: "trending",
    recommendation: "recommendations",
    discover: "discover"
  },
};
