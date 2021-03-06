import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Login',
        // navLink: <Link to="/signup">Sign Up</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        processDemo: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        otherForm: (
            <button className="modal-switch-btn" onClick={() => {
                dispatch(openModal("signup"))
                dispatch(clearErrors())
            }}>Create one
            </button>
        ),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);