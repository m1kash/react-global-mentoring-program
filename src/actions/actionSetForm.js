import { SET_FORM_VALUES } from '../constants/actions';

export const setForm = (payload) => {
    return {
        type: SET_FORM_VALUES,
        payload
    }
}