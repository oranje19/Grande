import React from 'react';
import { Link } from 'react-router-dom'
import UserStoriesList from './user_stories_list'

class UserStories extends React.Component {
    // constructor(props) {
    //     super(props)
    //     debugger
    //     this.userId = this.props.currentUserId
    //     this.stories = Object.values(this.props.stories)
        
    //     .filter(story => (
    //         story.authorId === this.userId
    //     ))
    // }

    componentDidMount() {
        // this.props.fetchUser(this.props.match.params.userId)
        this.props.requestUserStories(this.props.user.id)
    }

    render() {
        // debugger
        // this.stories = this.props.stories

        const { stories, deleteStory, user } = this.props;

        // console.log("THIS IS USER")
        // console.log(user)
        let storyCount = 0
        let tempStory = Object.entries(stories).map((story) => {
            if (story[1].author === user.username) {
                storyCount += 1
            } else {
                null
            }
        })

        if (!stories) return null;

        return (
            <div className="user-stories">
                <div className="my-stories-top">
                    <h1>Your Stories</h1>
                    <Link className="new-story-btn" to="/new/story">
                        Write a story
                    </Link>
                </div>
                <div className="stories-count">Published {storyCount}</div>
                <UserStoriesList user={user} stories={stories} deleteStory={deleteStory} />
            </div>
        )
    }

}

export default UserStories;