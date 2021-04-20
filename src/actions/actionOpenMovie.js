import {OPEN_MOVIE} from '../constants/actions';

export const openMovie = (payload) => {
    return {
        type: OPEN_MOVIE,
        payload
    }
}