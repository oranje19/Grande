import * as StoryApiUtil from '../util/story_api_util';

import { receiveErrors } from './error_actions';

export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const RECEIVE_STORY = "RECEIVE_STORY";
export const REMOVE_STORY = "REMOVE_STORY";
export const RECIEVE_USER_STORIES = "RECIEVE_USER_STORIES";

const receiveUserStories = stories => ({
    type: RECIEVE_USER_STORIES,
    stories
})

const receiveStories = stories => ({
    type: RECEIVE_STORIES,
    stories
});

const receiveStory = story => ({
    type: RECEIVE_STORY,
    story
});

const removeStory = storyId => ({
    type: REMOVE_STORY,
    storyId
});

export const requestUserStories = (userId) => dispatch => (
    StoryApiUtil.fetchUserStories(userId)
        .then((stories) => (
            dispatch(receiveUserStories(stories))
        ))
);

export const requestAllStories = () => dispatch => (
    StoryApiUtil.fetchAllStories()
        .then((stories) => (
        dispatch(receiveStories(stories))
    ))
);

export const requestCategoryStories = categoryId => dispatch => (
    StoryApiUtil.fetchCategoryStories(categoryId)
        .then((stories) => (
        dispatch(receiveStories(stories))
    ))
);

export const requestStory = storyId => dispatch => (
    StoryApiUtil.fetchStory(storyId)
        .then((story) => (
        dispatch(receiveStory(story))
    ))
);

export const createStory = story => dispatch => (
    StoryApiUtil.createStory(story).then((story) => (
        dispatch(receiveStory(story))
    ), (errors) => (
        dispatch(receiveErrors(errors.responseJSON))
    ))
);

export const updateStory = story => dispatch => (
    StoryApiUtil.updateStory(story).then((story) => (
        dispatch(receiveStory(story))
    ), (errors) => (
        dispatch(receiveErrors(errors.responseJSON))
    ))
);

export const deleteStory = storyId => dispatch => (
    StoryApiUtil.deleteStory(storyId).then(
        () => (
        dispatch(removeStory(storyId))
    ), (errors) => (
        dispatch(receiveErrors(errors.responseJSON))
    ))
);