export function formatAllSeries(series) {
    let mapseries = series?.map(serie => ({
        id: serie.id || "",
        title: serie.name || "",
        img: serie.poster_path || "",
        date: serie.first_air_date || "1900-01-1",
        vote: serie.vote_average || ""
    }));
    return mapseries;
}

export function cleanEmptySeries(series) {
    let cleanseries = series?.filter(serie => serie.overview !== "")
    return cleanseries;
}