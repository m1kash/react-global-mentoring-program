import * as types from '../constants/actions';

const movies = (state = {}, {type, payload}) => {
    switch (type) {
        case types.CREATE_MOVIE:
            return [...state.movies, payload]
        case types.LOAD_MOVIES:
            return [...payload.data]
        case types.REMOVE_MOVIE:
            return state.filter(movie => movie.id !== payload)
        default:
            return state;
    }
}

export default movies;