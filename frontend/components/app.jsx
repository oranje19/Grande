import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SplashFormContainer from './splash/splash_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBarContainer from './navbar/navbar_form_container';
import User from './users/user_stories';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import StoryIndexContainer from './stories/story_index_container';
import CreateStoryContainer from './stories/create_story_container';
import EditStoryContainer from './stories/edit_story_container';
import UserStoriesContainer from './users/user_stories_container'
import StoryDetailContainer from './stories/story_detail_container';
import CategoriesBarContainer from './categories/category_container';

const App = () => (
    <div className="body">
        <Modal />

        <div className="navbar">
            <div id="grande">
                <Link to="/home">Grande</Link>
            </div>
            <div >
            <NavBarContainer />
            </div>
        </div>
        
        <header>
            {/* <h1 className="top-left-title">Grande</h1> */}
            {/* <GreetingContainer /> */}
        </header>

        <ProtectedRoute path="/home" component={CategoriesBarContainer} />

        {/* <Test /> */}

        {/* <ProtectedRoute exact path="/test" component={Test} /> */}

        <Switch>
            <Route 
                exact path="/categories/:categoryId/stories"
                component={StoryIndexContainer}
            />
            <ProtectedRoute 
                exact path="/new/story"
                component={CreateStoryContainer}
            />
            <ProtectedRoute
                exact path="/users/:userId/stories"
                component={UserStoriesContainer}
            />

            <ProtectedRoute 
                exact path="/stories/:storyId"
                component={StoryDetailContainer}
            />

            <ProtectedRoute 
                exact path="stories/:storyId/edit"
                component={EditStoryContainer}
            />
            {/* <ProtectedRoute
                
            /> */}

            
        </Switch>

        <Route exact path="/" component={SplashFormContainer} />

        <AuthRoute path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;