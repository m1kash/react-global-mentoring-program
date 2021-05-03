import { SET_SEARCH } from '../constants/actions';

export const setSearch = (payload) => {
    return {
        type: SET_SEARCH,
        payload
    }
}