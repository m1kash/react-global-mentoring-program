import {REMOVE_MOVIE, LOAD_MOVIES, LOAD_MOVIE_DETAILS} from '../constants/actions';

export const loadMovieDetails = (payload) => ({
    type: LOAD_MOVIE_DETAILS,
    payload
});

export const actionLoadMovies = (payload) => ({
    type: LOAD_MOVIES,
    payload
});

export const removeMovie = (payload) => ({
    type: REMOVE_MOVIE,
    payload
});
