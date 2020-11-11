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

        return (
            <div>
                <div>
                    <div className="comment-top">
                        <div className="comment-author">
                            {comment_authors[comment.author_id][0]}
                        </div>
                        <div className="comment-info">
                            {comment_authors[comment.author_id]}
                        </div>
                    </div>
                    <div className="comment-bottom">
                        <div className="comment-body">
                            {comment.body}
                        </div>
                        <div>
                            <Link className="new-child-comment" to={`/comments/${comment.id}/new`}>
                                Write a comment
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="child-comments" 
                    style={{
                        marginLeft: "25px",
                        marginTop: "10px",
                        borderTop: "1px solid rgba(0, 0, 0, 0.3)"
                    }}
                >
                    {nestedComments}
                </div>
            </div>
        )
    }
}

export default CommentList;