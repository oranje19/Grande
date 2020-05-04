import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Splash from './splash_form';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = (dispatch) => ({
    openModal: () => dispatch(openModal("signup")),
    openModalLogin: () => dispatch(openModal("login"))
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash);