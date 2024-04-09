export function formatAllSeries(series) {
    if(!series || !Array.isArray(series)) return []

    let mapseries = series?.map(serie => ({
        id: serie.id || "",
        title: serie.name || "",
        img: serie.poster_path || "",
        date: serie.first_air_date || "1900-01-1",
        vote: serie.vote_average || "",
        backdrop_path: serie.backdrop_path || "/urj6noDW3OlROu34oy6BCmiQEWQ.jpg"
    }));
    return mapseries;
}

// export function cleanEmptySeries(series) {
//     let cleanseries = series?.filter(serie => serie.overview !== "")
//     return cleanseries;
// }