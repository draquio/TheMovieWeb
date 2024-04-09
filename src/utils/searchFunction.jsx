export function createSearchPath(text) {
  if (!text || typeof text !== "string") return "";
  const path = text.replaceAll(" ", "+");
  return path;
}

export function createQueryFromPath(text) {
  if (!text || typeof text !== "string") return "";
  const query = text.replaceAll("+", " ");
  return query;
}
