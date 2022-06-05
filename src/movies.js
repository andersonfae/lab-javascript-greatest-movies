// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  const allDirect = moviesArr.map(movie => movie.director);
  return allDirect;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const allSteven = moviesArr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
  return allSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  if(moviesArr.length === 0) {
    return 0;
  }

    moviesArr.forEach(item => {
      if (typeof item.score != "number"){
        item.score = 0;
      };
    });

  let scoreTotal = moviesArr.length;

  const sum = moviesArr.reduce(function (accumulator, addMovie) {
    return accumulator + addMovie.score;
  }, 0);

  const avScore = sum / scoreTotal;
  const total = Number(avScore.toFixed(2));

  return total;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(someArr) {
  if (someArr.length === 0) {
    return 0;
  }

  let totalDrama = someArr.filter(movie => movie.genre.includes("Drama"));

  const movieDrama = totalDrama.reduce(function (accumulator, totalDrama) {
    return accumulator + totalDrama.score;
  }, 0);
  if(totalDrama.length === 0) {
    return 0;
  }

  const avScore = movieDrama / totalDrama.length;
  const total = Number(avScore.toFixed(2));

  return total;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const sortedYear = [...arr].sort((a, b) => {
    if(a.year - b.year == 0) {
    return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  } else {
    return a.year - b.year;
  }
  });
return sortedYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const byTitle = moviesArray.map(movie => movie.title);

  const sortedTitles = byTitle.sort();
    if(sortedTitles.length > 20) {
      sortedTitles.splice(20)
    }

  return sortedTitles
  };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
