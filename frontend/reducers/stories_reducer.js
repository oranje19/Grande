import {
    RECEIVE_STORIES,
    RECEIVE_STORY,
    RECIEVE_USER_STORIES,
    REMOVE_STORY
} from '../actions/story_actions';

const storiesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STORIES:
            return Object.assign({}, action.stories);
        case RECEIVE_STORY:
            return Object.assign({}, state, { [action.story.id]: action.story });
        case RECIEVE_USER_STORIES:
            return action.stories
        case REMOVE_STORY:
            const newState = Object.assign({}, state);
            delete newState[action.story.id];
            return newState;
        default:
            return state;
    }
};

export default storiesReducer;