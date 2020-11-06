import { 
    RECEIVE_CURRENT_USER,
    REMOVE_USER
} from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [action.currentUser.id]: action.currentUser });
        case REMOVE_USER:
            const newState = Object.assign({}, state);
            delete newState[action.userId]
            return newState
        default:
            return state;
    }
};

export default usersReducer;