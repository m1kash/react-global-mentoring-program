import * as types from '../constants/actions';
const initialState = {
    sortBy: '',
    limit: 21,
    sortOrder: 'desc',
    filter: '',
    searchBy: 'title',
    search: '',
    openMovie: false
};
const app = (state = initialState  , {type, payload}) => {
    switch (type) {
        case types.SET_SORT:
            return  {
                ...state,
                ...payload
            }
        case types.SET_FILTER:
            return  {
                ...state,
                ...payload
            }
        case types.SET_SEARCH:
            return  {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}

export default app;