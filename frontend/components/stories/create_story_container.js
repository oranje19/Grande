import { connect } from 'react-redux';
import StoryForm from './story_form';

const mapStateToProps = state => ({
    currentUserId: state.session.id,
    categories: Object.values(state.entities.categories),
    story: {
        title: "",
        body: "",
        category_id: 1
    },
    buttonText = "Publish"
});

export default connect(mapStateToProps, null)(StoryForm);