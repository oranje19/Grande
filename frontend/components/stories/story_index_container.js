import { connect } from 'react-redux';
import StoryIndex from './story_index_form';
import { requestCategoryStories, requestStory } from '../../actions/story_actions';
import { requestCategory } from '../../actions/category_actions';

const mapStateToProps = (state, ownProps) => {
    const category = state.entities.categories[ownProps.match.params.categoryId];
    return {
        category: category,
        stories: Object.values(state.entities.stories)
    };
};

const mapDispatchToProps = dispatch => ({
    requestCategoryStories: categoryId => dispatch(requestCategoryStories(categoryId)),
    requestCategory: categoryId => dispatch(requestCategory(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryIndex);