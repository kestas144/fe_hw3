import {combineReducers} from 'redux';

const initialStateOfCards = {
    moviesList: [],
    genresList: [],
    genreId: 0,
    showCards: true,
};

const cards = (state = initialStateOfCards, action) => {
    switch (action.type) {
        case 'toggleCards':
            return {
                ...state,
                showCards: action.shouldShow,
            };
        case 'setMostPopularMovies':
            return {
                ...state,
                moviesList: action.list,
            };
        case 'setMoviesByGenre':
            return {
                ...state,
                moviesList: action.list,
            };
        case 'setGenres':
            return {
                ...state,
                genresList: action.genres,
            };
        case 'setGenreId':
            return {
                ...state,
                genreId: action.genreId,
            };
        default:
            return state;
    }
};

const initialLikeState = {
    likeList: []
};

const likeCard = (state = initialLikeState, action) => {
    switch (action.type) {
        case 'setLike':
            return {
                ...state,
                likeList: state.likeList.concat(action.title)
            };
        case 'removeLike' :
            return {
                ...state,
                likeList: state.likeList.filter(movieTitle => movieTitle !== action.title)
            };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    cards,
    likeCard
});
