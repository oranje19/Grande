import { connect } from "react-redux";
import { requestComment } from "../../actions/comment_actions";
import { createComment } from "../../util/comment_api_util";
import CreateChildComments from "./create_child_comments";

const mapStateToProps = (state, ownProps) => {
    return {
        parentComment: state.entities.comments[ownProps.match.params.commentId]
    }
}

const mapDispatchToProps = (dispatch) => ({
    createComment: (comment) => dispatch(createComment(comment)),
    requestComment: (commentId) => dispatch(requestComment(commentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateChildComments)