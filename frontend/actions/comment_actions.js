import * as CommentApiUtil from '../util/comment_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment: comment
});

export const requestComment = (commentId) => (dispatch) => (
    CommentApiUtil.fetchComment(commentId)
        .then((comment) => (
            dispatch(receiveComment(comment))
        ))
);

export const createComment = (comment) => (dispatch) => (
    CommentApiUtil.createComment(comment)
        .then(
            (comment) => dispatch(receiveComment(comment)),
            (errors) => dispatch(receiveErrors(errors.responseJSON))
        )
);

export const updateComment = (comment) => (dispatch) => (
    CommentApiUtil.updateComment(comment)
        .then(
            (comment) => dispatch(receiveComment(comment)),
            (errors) => dispatch(receiveErrors(errors.responseJSON))
        )
);