import * as CategoriesApiUtil from '../util/category_api_util';

export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORY_ERRORS = "RECEIVE_CATEGORY_ERRORS";

const receiveAllCategories = categories => ({
        type: RECEIVE_ALL_CATEGORIES,
        categories
});

const receiveCategory = category => ({
    type: RECEIVE_CATEGORY,
    category
});

const receiveCategoryErrors = errors => ({
    type: RECEIVE_CATEGORY_ERRORS,
    errors
});

export const requestAllCategories = () => dispatch => {
    // debugger
    return (
    CategoriesApiUtil.fetchAllCategories()
        .then(
            (categories) => (dispatch(receiveAllCategories(categories))),   // <= success
              //the categories i get from jbuilder                                                   
            (errors) => (dispatch(receiveCategoryErrors(errors.responseJSON)))  // <= failure
        )       
    )
};

// () => (dispatch...)

// function(categories){
//     return dispatch(receiveAllCategories(categories))
// }

export const requestCategory = category => dispatch => (
    CategoriesApiUtil.fetchCategory(category).then((category) => (
        dispatch(receiveCategory(category))
    ))
);