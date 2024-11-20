export function formatAllGenres(genres) {
  if (!genres || !Array.isArray(genres)) return [];

  let mapgenres = genres?.map((genre) => ({
    id: genre.id,
    name: genre.name,
  }));
  return mapgenres;
}
