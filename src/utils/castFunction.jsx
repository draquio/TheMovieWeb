export function getMovieDirectors(crew){
    const limitdirector = crew.filter(person => person.job ==="Director");
    return limitdirector;
}
export function getActors(cast, limit){
    const limitcast = cast.slice(0,limit);
    return limitcast;
}

export function getSerieDirectors(crew, limit){
    const directors = crew.filter(person => person.jobs[0].job ==="Director");
    const limitdirectors = directors.slice(0,limit)
    return limitdirectors;
}