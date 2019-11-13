import axios from 'axios';
import {
    setLike,
    removeLike,
    setGenreId,
    setGenres,
    setMostPopularMovies, setMoviesByGenre,
} from './actions';
import {endpoints} from './config';

export const getGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then(data => {
            dispatch(setGenres(data.data.genres));
        });
};
export const getMostPopularMovies = () => (dispatch) => {
    axios
        .get(endpoints.mostPopularMovies())
        .then((data) => {
            dispatch(setMostPopularMovies(data.data.results));
        });
};

export const getMoviesByGenre = (genre) => (dispatch) => {
    axios
        .get(endpoints.genreMovies(genre))
        .then((data) => {
            dispatch(setMoviesByGenre(data.data.results));
        });
};
export const getGenreId = (genreId) => dispatch => {
    dispatch(setGenreId(genreId));
};

export const likeChange = (movieTitle, likeList) => dispatch => {
    if (likeList.find(title => (title === movieTitle))) {
        dispatch(removeLike(movieTitle));
    } else {
        dispatch(setLike(movieTitle));
    }
};

