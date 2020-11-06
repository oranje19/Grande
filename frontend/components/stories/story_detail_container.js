import { connect } from "react-redux";
import { requestStory, requestUserStories } from "../../actions/story_actions";
import { fetchUser } from "../../actions/user_actions";
import StoryDetail from "./story_detail";

const mapStateToProps = (state, ownProps) => ({
    story: state.entities.stories[ownProps.match.params.storyId],
    user: state.entities.users[state.session.id],
    currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch) => ({
    requestStory: (storyId) => dispatch(requestStory(storyId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail)

