import {LOAD_MOVIE_DETAILS} from '../constants/actions';

export const loadMovieDetails = function (payload) {
    return {
        type: LOAD_MOVIE_DETAILS,
        payload
    }
};