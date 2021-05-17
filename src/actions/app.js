import {SET_FILTER, SET_SEARCH, SET_SORT} from '../constants/actions';

export const setSort = (payload) => ({
    type: SET_SORT,
    payload
});

export const setSearch = (payload) => ({
    type: SET_SEARCH,
    payload
});

export const setFilter = (payload) => ({
    type: SET_FILTER,
    payload
});