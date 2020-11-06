import React from "react";
import { Link } from "react-router-dom";
import dateUtil from "../../util/date_util";

class StoryDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestStory(this.props.match.params.storyId)
        .then(() => this.props.fetchUser(this.props.currentUserId))
    }


    render() {
        const { user, story } = this.props;

        return (
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
        )
    }

}

export default StoryDetail;