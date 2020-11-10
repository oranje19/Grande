import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import storiesReducer from './stories_reducer';
import CategoriesReducer from './categories_reducer';
import commentsReducer from './comments_reducer';

export default combineReducers({
    users: usersReducer,
    stories: storiesReducer,
    categories: CategoriesReducer,
    comments: commentsReducer
});
