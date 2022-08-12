console.log("__________________________promises_____________________");
// The Movie Database API: https://developers.themoviedb.org/3/getting-started/introduction

var apiKey = 'b89fc45c2067cbd33560270639722eae';


async function getTopMoviesIds(n = 3) {
    const popularMovies = await getPopularMovies();
    const ids = popularMovies.map(movie => movie.id);
    return ids;
}

async function getMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

async function getTopMoviesInSequence() {
  const ids = await getTopMoviesIds();
  const movies = [];

  for (const id of ids) {
    const movie = await getMovie(id);
    movies.push(movie);
  }

  return movies;
}

async function getTopMoviesInParallel() {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map(id => getMovie(id));

  const movies = await Promise.all(moviePromises);

  return movies;
}

async function main(){
    let data = await getPopularMovies();
    let data2 = await getTopMoviesInSequence();
    let data3 = await getTopMoviesInParallel();
    let data4 = await getFastestTopMovie();
    console.log("_________data____________");
    console.log(data);
    console.log("_________data2____________");
    console.log(data2);
    console.log("_________data3____________");
    console.log(data3);
    console.log("_________data4____________");
    console.log(data4);
}

async function getFastestTopMovie() {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map(id => getMovie(id));

  const movie = await Promise.race(moviePromises);
  return movie;
}

main();

console.log("________________________end_promises___________________");