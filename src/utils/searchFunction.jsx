export function createSearchPath(text) {
  const path = text.replaceAll(" ", "+");
  return path;
}

export function createQueryFromPath(text) {
  const query = text.replaceAll("+", " ");
  return query;
}
