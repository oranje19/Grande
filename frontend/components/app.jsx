import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-redux-dom';

const App = () => (
    <div>
        <header>
            <h1>Grande</h1>
            <GreetingContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;