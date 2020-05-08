import React from 'react';
import { Link } from 'react-router-dom'

class Test extends React.Component {
    // constructor(props) {
    //     super(props)
    //     debugger
    //     this.userId = this.props.currentUserId
    //     this.stories = Object.values(this.props.stories)
        
    //     .filter(story => (
    //         story.authorId === this.userId
    //     ))
    // }


    render() {
        // debugger
        // this.stories = this.props.stories
        return (
            <div>
                {/* Hello I'm in the test component! */}
                {Object.values(this.props.stories).map(story => 
                    <div className="list-stories-title">
                        {story.title}
                    </div>
                )}
            </div>
        )
    }

}

export default Test;