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
        const { stories, user } = this.props;
        // console.log(stories)
        // let b = Object.entries(stories)
        // console.log(b)
        // console.log("this is username!!!!!!!!!!!")
        // console.log(user.username)

        // const userStoryList = Object.entries(stories).map((story) => (
        //     <li key={story[0]}>
        //         <Link to={`/stories/${story[0]}`}>{story[1].title}</Link>
        //         {/* <Link to={`/stories/${story.id}`}>{story.title}</Link> */}
        //         <div className="user-story-btn">
        //             <Link to={`/stories/${story[1].id}/edit`}>Edit Story</Link>
        //             <button onClick={() => this.handleDelete(story[1].id)}>
        //                 Delete Story
        //             </button>
        //         </div>
        //     </li>                                                                               
        // ));

        const userStoryList = Object.entries(stories).map((story) => {
            if (story[1].author === user.username) {
                return (
                    <li key={story[0]}>
                        <Link to={`/stories/${story[0]}`}>{story[1].title}</Link>
                        {/* <Link to={`/stories/${story.id}`}>{story.title}</Link> */}
                        <div className="user-story-btn">
                            <Link to={`/stories/${story[1].id}/edit`}>Edit Story</Link>
                            <button onClick={() => this.handleDelete(story[1].id)}>
                                Delete Story
                    </button>
                        </div>
                    </li>   
                )
            } else {
                null
            }
        })

        return (
            <div>
                <ul className="user-story-list">{userStoryList}</ul>
            </div>
        )
    }

}

export default withRouter(UserStoriesList)