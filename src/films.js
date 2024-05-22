const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result = movies.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((array) => array.director === director);
  console.log('EXERCISE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorMovies = array.filter((array) => array.director === director);
  let average = directorMovies.reduce((suma, movie) => suma + movie.score, 0);
  let result = average / directorMovies.length;
  console.log(
    `EXERCICE 3, The average of the Films of ${director} are ` + result
  );
  return result;
}

//Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  const orderedMoviesTitles = [...movies]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((movie) => movie.title)
    .slice(0, 20);

  console.log('EXERCISE 4', orderedMoviesTitles);
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
  console.log('EXERCISE 5', orderMoviesYear);
  return orderMoviesYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const categoryMovies = array.filter((item) => item.genre.includes(category));
  if (categoryMovies.length === 0) {
    return 0;
  }
  let average = categoryMovies.reduce((suma, movie) => suma + movie.score, 0);
  let result = average / categoryMovies.length;
  result = parseFloat(result.toFixed(2));
  console.log(`EXERCISE 6, The average of category ${category} is: `, result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const newArrayMovies = movies.map((movie) => {
    const timeArray = movie.duration.split(' ');
    let totalMinutes = 0;

    timeArray.forEach((time) => {
      if (time.includes('h')) {
        totalMinutes += parseInt(time) * 60;
      } else if (time.includes('min')) {
        totalMinutes += parseInt(time);
      }
    });

    return { ...movie, duration: totalMinutes };
  });

  console.log(
    'EXERCISE 7, Movies with duration converted to minutes:',
    newArrayMovies
  );

  return newArrayMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const yearMovies = movies.filter((movie) => movie.year === year);
  if (yearMovies === 0) {
    console.log(`EXERCISE 8, There are no films in ${year}`);
    return [];
  }
  let maxScore = Math.max(...yearMovies.map((item) => item.score));
  let bestFilm = yearMovies.filter((movie) => movie.score === maxScore);
  return bestFilm;
}

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
