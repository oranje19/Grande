import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";


const mapStateToProps = (state, ownProps) => {
    return {
        comment: {
            body: '',
            story_id: state.entities.stories[ownProps.match.params.storyId].id
        },
        story: state.entities.stories[ownProps.match.params.storyId]
    }
};

const mapDispatchToProps = (dispatch) => ({
    createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)