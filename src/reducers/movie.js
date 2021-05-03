import * as types from '../constants/actions';

export default function movieDetails (state = {}, {type, payload}) {
    switch (type) {
        case types.LOAD_MOVIE_DETAILS:
            return payload;
        default:
            return state;
    }
}