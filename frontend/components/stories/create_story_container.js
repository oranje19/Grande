import { connect } from 'react-redux';
import StoryForm from './story_form';
import { requestAllCategories } from '../../actions/category_actions';
import { createStory } from '../../actions/story_actions';

const mapStateToProps = state => {
    // console.log((state.entities))
    // debugger
    return ({
    currentUserId: state.session.id,
    categories: Object.values(state.entities.categories),
    story: {
        title: "",
        body: "",
        category_id: ""
    },
    buttonText: "Publish"
})
};

const mapDispatchToProps = dispatch => ({
    requestAllCategories:  () => dispatch(requestAllCategories()),
    createStory: (story) => dispatch(createStory(story))
})

export default connect(mapStateToProps, mapDispatchToProps)(StoryForm);