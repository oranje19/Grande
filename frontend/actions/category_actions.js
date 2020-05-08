import * as CategoriesApiUtil from '../util/category_api_util';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

const receiveAllCategories = categories => {
    // debugger
    return ({
    type: RECEIVE_ALL_CATEGORIES,
    categories
    })
};

const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
});

export const requestAllCategories = () => dispatch => {
    // debugger
    return (
    CategoriesApiUtil.fetchAllCategories().then((categories) => (
        dispatch(receiveAllCategories(categories))
    ))
    )
};

export const requestCategory = category => dispatch => (
    CategoriesApiUtil.fetchCategory(category).then((category) => (
        dispatch(receiveCategory(category))
    ))
);