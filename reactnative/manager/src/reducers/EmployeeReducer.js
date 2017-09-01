import {
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEES_LOADING
} from '../actions/types';

const INITIAL_STATE = { loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            return { ...state, employeesList: action.payload, loading: false };
        case EMPLOYEES_LOADING:
            return { ...state, loading: true };
        default:
            return state;
    }
};
