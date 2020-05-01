import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        // navLink: <Link to="/login">Log In</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        processDemo: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => {
                dispatch(openModal("login"))
                dispatch(clearErrors())
            }}>Sign in
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        // clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);