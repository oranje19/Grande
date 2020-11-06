import { connect } from 'react-redux';
import UserStories from './user_stories';
import { fetchUser } from '../../actions/user_actions';
import { deleteStory } from '../../actions/story_actions';
import { requestUserStories } from '../../actions/story_actions';


const mapStateToProps = state => {
    // debugger
    return ({
        stories: state.entities.stories,
        user: state.entities.users[state.session.id]
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    deleteStory: (storyId) => dispatch(deleteStory(storyId)),
    requestUserStories: (userId) => dispatch(requestUserStories(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserStories)