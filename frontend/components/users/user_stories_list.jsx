import React from "react";
import { Link, withRouter } from "react-router-dom";

class UserStoriesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleted: false
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(storyId) {
        this.props.deleteStory(storyId);
        this.setState({
            delete: !this.state.deleted
        })
    }

    render() {
        const { stories } = this.props;
        // console.log(stories)
        // let b = Object.entries(stories)
        // console.log(b)
        const userStoryList = Object.entries(stories).map((story) => (
            <li key={story.id}>
                <Link to={`/stories/${story[0]}`}>{story[1].title}</Link>
                {/* <Link to={`/stories/${story.id}`}>{story.title}</Link> */}
                <div className="user-story-btn">
                    <Link to={`/storirs/${story.id}/edit`}>Edit Story</Link>
                    <button onClick={() => this.handleDelete(story.id)}>
                        Delete Story
                    </button>
                </div>
            </li>
        ));

        return (
            <div>
                <ul className="user-story-list">{userStoryList}</ul>
            </div>
        )
    }

}

export default withRouter(UserStoriesList)