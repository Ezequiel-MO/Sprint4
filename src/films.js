const movies = require('./data.js');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((item) => item.director);
  //console.log('EXERCISE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((item) => item.director === director);
  //console.log('EXERCISE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
const findAverageScore = (array) => {
  let averageScore;
  let scores = [...array];
  let moviesWithScore;
  moviesWithScore = scores
    .filter((films) => films.score !== '')
    .map((films) => films.score);
  const sumOfScores = moviesWithScore.reduce((a, b) => a + b);
  let average = sumOfScores / moviesWithScore.length;
  averageScore = Math.round(average * 100) / 100;
  return averageScore;
};

function moviesAverageOfDirector(array, director) {
  const moviesFromDirector = getMoviesFromDirector(array, director);
  const averageScore = findAverageScore(moviesFromDirector);
  //console.log('EXERCISE 3 ->', averageScore);
  return averageScore;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let sortedArray = [...array];
  let sortedTitles = [];

  const sortedByTitle = sortedArray.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  sortedTitles = sortedByTitle.map((film) => film.title);
  const top20 = sortedTitles.slice(0, 20);
  console.log('EXERCISE 4 ->', top20);

  return top20;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const allMovies = [...array];
  const sortedByYear = allMovies.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    return a.title.localeCompare(b.title);
  });
  //console.log('EXERCISE 5 ->', sortedByYear);
  return sortedByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const moviesWithRequestedCategory = array.filter((item) =>
    item.genre.some((element) => element === category)
  );
  const averageScore = findAverageScore(moviesWithRequestedCategory);
  //console.log('EXERCISE 6 ->', averageScore);
  return averageScore;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let hours;
  let minutes;
  let moviesInMinutes = array.map((obj) => {
    let updatedObject = { ...obj };
    hours = parseInt(obj.duration.charAt(0));
    minutes = obj.duration.charAt(3)
      ? parseInt(obj.duration.slice(0, -3).slice(3, 6))
      : null;
    updatedObject.duration = hours * 60 + minutes;
    return updatedObject;
  });
  //console.log('EXERCISE 7 ->', moviesInMinutes);
  return moviesInMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let bestFilm;
  const filmsPerYear = array.filter((films) => films.year === year);
  bestFilm = filmsPerYear.reduce((a, b) => {
    if (a.score > b.score) {
      return a;
    }
    if (a.score < b.score) {
      return b;
    }
  });
  //console.log('films per year=>', filmsPerYear);
  //console.log('best film=>', bestFilm);

  return [bestFilm];
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
