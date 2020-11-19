import React from 'react';
import { connect } from 'react-redux';
import StoryForm from './story_form';
import { updateStory, requestStory } from '../../actions/story_actions';

class EditStoryForm extends React.Component {
    componentDidMount() {
        this.props.requestStory(this.props.storyId);
    }

    render() {
        const { story, categories, updateStory, buttonText, currentUserId } = this.props;

        if (!story) return null;

        return (
            <div className="story-form">
                <StoryForm
                    updateStory={updateStory}
                    buttonText={buttonText}
                    story={story}
                    categories={categories}
                    currentUserId={currentUserId}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        categories: Object.values(state.entities.categories),
        story: state.entities.stories[ownProps.match.params.storyId],
        buttonText: "Save and Publish",
        // storyId: parseInt(ownProps.match.params.storyId)
        storyId: ownProps.match.params.storyId || ""
    };
};

const mapDispatchToProps = dispatch => ({
    updateStory: (story) => dispatch(updateStory(story)),
    requestStory: (storyId) => dispatch(requestStory(storyId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStoryForm);