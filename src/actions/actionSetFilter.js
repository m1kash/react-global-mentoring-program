import {SET_FILTER} from '../constants/actions';

export const setFilter = (payload) => {
    return {
        type: SET_FILTER,
        payload
    }
}