export function formatAllMovie(movies) {
  if(!movies || !Array.isArray(movies)) return []
  let mapmovie = movies?.map((movie) => ({
    id: movie.id || "",
    title: movie.title || "",
    img: movie.poster_path || "",
    date: movie.release_date || "1900-01-1",
    vote: movie.vote_average || "",
    backdrop_path: movie.backdrop_path || "https://image.tmdb.org/t/p/w780/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg"
  }));
  return mapmovie;
}

export function formatSearch(list) {
  if(!list) return []
  let maplist = list.map((list) => ({
    id: list.id || "",
    title: list.title || list.name || "",
    img: list.poster_path || "",
    date: list.release_date || list.first_air_date || "1900-01-1",
    vote: list.vote_average || "",
    type: list.media_type || "",
    backdrop_path: list.backdrop_path || "https://image.tmdb.org/t/p/w780/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg"
  }));
  let filterlist = maplist?.filter((list) => list.img);
  return filterlist;
}


export function createPath(title) {
  if(!title) return ""
  let result = title
    .replaceAll(" ", "-")
    .replaceAll(":", "")
    .replaceAll("!", "")
    .toLowerCase();
  return result;
}
