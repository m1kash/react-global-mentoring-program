import * as types from '../constants/actions';

const form = (state = {}, {type, payload}) => {
    switch (type) {
        case types.SET_FORM_VALUES:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}

export default form;