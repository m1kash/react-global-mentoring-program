import {CREATE_MOVIE} from '../constants/actions';

export const addMovie = (payload) => ({
    type: CREATE_MOVIE,
    payload
});