export const toggleCards = (shouldShow) => ({
  type: 'toggleCards',
  shouldShow,
});


export const setMostPopularMovies = (list) => ({
  type: 'setMostPopularMovies',
  list,
});

export const setMoviesByGenre = (list) => ({
  type: 'setMoviesByGenre',
  list,
});

export const setGenres = (genres) => ({
  type: 'setGenres',
  genres,
});

export const setGenreId = (genreId) => ({
  type: 'setGenreId',
  genreId,
});

export const setLike = (title) => ({
  type: 'setLike',
  title,
});

export const removeLike = (title)=> ({
  type: 'removeLike',
  title,
});


