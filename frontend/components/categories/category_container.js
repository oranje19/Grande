import { connect } from 'react-redux';
import CategoriesBar from './categories_bar';
import { requestAllCategories } from '../../actions/category_actions';

const mapStateToProps = state => ({
    categories: Object.values(state.entities.categories)
});

const mapDispatchToProps = dispatch => ({
    requestAllCategories: () => dispatch(requestAllCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesBar);