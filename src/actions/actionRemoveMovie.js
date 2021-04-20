import { REMOVE_MOVIE } from '../constants/actions';

export const removeMovie = (payload) => {
    return {
        type: REMOVE_MOVIE,
        payload
    }
}