const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result = movies.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((array) => array.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorMovies = array.filter((array) => array.director === director);
  let average = directorMovies.reduce((suma, movie) => suma + movie.score, 0);
  let result = average / directorMovies.length;
  console.log(
    `EXERCICE 3 -> The average of the Films of ${director} are ` + result
  );
  return result;
}

//Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  const orderedMoviesTitles = [...movies]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((movie) => movie.title)
    .slice(0, 20);

  console.log('EXERCISE 4 ->', orderedMoviesTitles);
  return orderedMoviesTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const orderMoviesYear = [...movies].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  console.log(orderMoviesYear);
  return orderMoviesYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
