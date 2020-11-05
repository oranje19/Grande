import { RECEIVE_CATEGORY_ERRORS, RECEIVE_ALL_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';
// import { CLEAR_ERRORS } from '../actions/error_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CATEGORY_ERRORS:
            return action.errors;
        case RECEIVE_ALL_CATEGORIES:
            return [];
        case RECEIVE_CATEGORY:
            return [];
        default:
            return state;
    }
};