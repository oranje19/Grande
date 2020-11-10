import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class CommentList extends React.Component {
    
    render () {
        const { comment, allComments, comment_authors, storyId } = this.props;
        const nestedComments = (allComments[comment.id] || []).map((comment) => {
            return (
                <CommentList 
                    key={comment.id}
                    storyId={storyId}
                    comment={comment}
                    allComments={allComments}
                    comment_author={comment_authors}
                />
            )
        })
    }
}