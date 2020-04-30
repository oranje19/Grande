import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashFormContainer from './splash/splash_form_container';
import Modal from './modal/modal';
import NavBar from './navbar/navbar_form_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div className="grande">
        <header>
            <h1>Grande</h1>
            <GreetingContainer />
        </header>

        <Modal />

        <NavBar />

        <Route exact path="/" component={SplashFormContainer} />

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;