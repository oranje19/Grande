import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash_form';
import { requestAllCategories } from '../../actions/category_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    categories: Object.values(state.entities.categories)
})

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openModal("signup")),
    openModalLogin: () => dispatch(openModal("login")),
    requestAllCategories: () => dispatch(requestAllCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash);