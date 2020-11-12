import { connect } from "react-redux";
import { requestStory, requestUserStories } from "../../actions/story_actions";
import { fetchUser } from "../../actions/user_actions";
import { createComment } from "../../util/comment_api_util";
import StoryDetail from "./story_detail";

const mapStateToProps = (state, ownProps) => ({
    story: state.entities.stories[ownProps.match.params.storyId],
    user: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    storyId: parseInt(ownProps.match.params.storyId)
});

const mapDispatchToProps = (dispatch) => ({
    requestStory: (storyId) => dispatch(requestStory(storyId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    createComment: (comment) => dispatch(createComment(comment)),
    follow: (userId) => dispatch(follow(userId)),
    unfollow: userId => dispatch(unfollow(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryDetail)

