// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => {
    return movie.director;
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => {
    return movie.director === director;
  });
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const movies = array.filter(movie => movie.director === director);
  const totalScore = movies.reduce((acc, movie) => acc + movie.score, 0);
  const averageScore = totalScore / movies.length;
  return parseFloat(averageScore.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 

function orderAlphabetically(array) {
  const sortedArray = array.slice().sort((a, b) => a.title.localeCompare(b.title));
  const movieTitles = sortedArray.slice(0, 20).map(movie => movie.title);
  return movieTitles;
}

//En esta solución, array.slice() devuelve una copia superficial del array original que se ordena en la variable sortedArray.De esta forma, el array original permanece sin cambios.

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  const sortedMovies = movies.slice();

  sortedMovies.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  // return the sorted array
  return sortedMovies;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const validGenres = array.flatMap(movie => movie.genre);
  if (!validGenres.includes(category)) {
    return "Category not found";
  }

  const moviesInCategory = array.filter(movie => movie.genre.includes(category) && movie.score);
  if (moviesInCategory.length === 0) {
    return "No movies found in category";
  }

  const totalScore = moviesInCategory.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);
  const averageScore = Number((totalScore / moviesInCategory.length).toFixed(2));
  return averageScore;
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  return movies.map(function (movie) {
    var durationArray = movie.duration.split(" ");
    var hours = parseInt(durationArray[0]) || 0; // Manejar el caso de que no se pueda parsear la duración
    var minutes = parseInt(durationArray[1]) || 0; // Manejar el caso de que no se pueda parsear la duración
    var totalMinutes = hours * 60 + minutes;
    return Object.assign({}, movie, { duration: totalMinutes });
  });
}






// Exercise 8: Get the best film of a year

function bestFilmOfYear(array, year) {
  const movieYear = array.filter((movie) => movie.year === year && movie.score);

  if (movieYear.length === 0) {
    return null; // se devuelve null si no hay películas del año   especificado o si ninguna de ellas tiene score
  }

  const bestScore = Math.max(...movieYear.map((movie) => movie.score));
  const bestMoviesOfYear = movieYear.filter((movie) => movie.score === bestScore);

  return bestMoviesOfYear;
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
    bestFilmOfYear,
  };
}


