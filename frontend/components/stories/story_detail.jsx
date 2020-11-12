import React from "react";
import { Link } from "react-router-dom";
import dateUtil from "../../util/date_util";
import CommentList from "../comments/comment_list";

class StoryDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followed: false
        };

        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);

    }

    componentDidMount() {
        // debugger
        this.props.requestStory(this.props.storyId)
            // .then(() => this.props.fetchUser(this.props.currentUserId))
    }

    handleFollow() {
        this.props.follow(this.props.story.author_id)
            .then(
                () => this.setState( { followed: !this.state.followed })
            )
    }

    handleUnfollow() {
        this.props.unfollow(this.props.story.author_id)
            .then(
                () => this.setState({ followed: !this.state.followed })
            )
    }

    render() {
        const { user, story } = this.props;
        console.log(story)

        if (!story || !user.followings) return null;
        let followed = false;

        user.followings.forEach((following) => {
            if (following.username == story.author) {
                followed = true;
            }
        })

        const comment_authors = story.comment_authors;

        const showComments = story.all_comments
            ? Object.keys(story.all_comments).length !== 0
                ? story.all_comments[""].map((comment) => {
                    return (
                        <CommentList 
                            key={comment.id}
                            storyId={story.id}
                            comment={comment}
                            allComments={story.all_comments}
                            comment_authors={comment_authors}
                        />
                    );
                })
                : null
            : null

        const placeHolderText = showComments
                ? "Write a comment..."
                : "Be the first to write a comment..."

        // const followButton
        // const followAction
        
        if (story.author_id === undefined) {
            return null
        } else {

            
            return (
                <div>
                <div className="story-content">
                    <ul className="story-detail">
                        <li className="story-title">{story.title}</li>
                        <li className="story-category">{story.category}</li>
                        <li className="story-author-info">
                            <div>{story.author[0]}</div>
                            <div>
                                <div className="story-author-info-1">
                                    <div>
                                        <Link to="">{story.author}</Link>
                                    </div>
                                </div>
                                <div className="story-author-info-2">
                                    <div>{dateUtil(story.updated_at)}</div>
                                    <i className="fas fa-circle"></i>
                                    <div>{`${Math.floor(Math.random() * 10 + 2)} min read`}</div>
                                </div>
                            </div>
                        </li>
                        <li className="story-body">
                            <p>{story.body[0].toUpperCase()}</p>
                            <div>{story.body.slice(1)}</div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    }
    
}

export default StoryDetail;