import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.demoUser = {
            username: 'demo_user',
            email: 'demouser@grande.io',
            password: 'demo12345'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    demoLogin(e) {
        e.preventDefault();
        this.props.processDemo(this.demoUser)
            .then(() => (this.props.closeModal()))

    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => (this.props.closeModal()))
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        let email;

        if (this.props.formType === 'Sign Up') {
            email = (
                <div className="session-info">
                    <label htmlFor="email">Email</label>
                    <br/>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="modal-input"
                            // placeholder="Email"
                        />
                    <br />
                </div>
                
            )
        } else {
            email = null;
        }

        const { formType, otherForm, closeModal } = this.props;

        const message = formType === 'Sign Up' ? 'Already have an account?' : "No account?";
        const button_text = formType === 'Sign Up' ? 'Sign up' : 'Log in';
        const intro = formType === 'Sign Up' 
            ? 'Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.'
            : 'Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.'
        const login_intro = formType === 'Sign Up' ? 'Join Grande.' : 'Welcome back.'

        return (
            <div className="modal-child">
                <div onClick={closeModal} className="close-x">
                    &times;
                </div>
                <div className="modal-content">
                    <div className="modal-title">{login_intro}</div>
                    <div className="modal-intro">{intro}</div>
                    <div className="modal-quote">Be the Star.</div>
                    <br/>
                    <ul>{this.renderErrors()}</ul>
                    <br/>
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                        <div className="session-info">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                // placeholder="Username"
                                className="modal-input"
                            />
                        </div>
                        {/* <br/> */}
                        {/* <div className="session-info"> */}
                            {email}
                        {/* </div> */}
                        <div className="session-info">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update("password")}
                                // placeholder="Password"
                                className="modal-input"
                            />
                        </div>
                        <br/>
                        <input type="submit" className="modal-submit" value={button_text} />
                    </form>
                    <button className="modal-submit-demo" onClick={this.demoLogin}>
                        Demo User
                    </button>

                    <div className="modal-bottom">
                        {message}
                        <div className="modal-switch">{otherForm}</div>
                    </div>
                </div>
            </div>
        )

        // return (
        //     <div className="login-form-container">
        //         <form onSubmit={this.handleSubmit} className="login-form-box">
        //             Welcome to Grande!
        //             <br/>
        //             Please {this.props.formType} or {this.props.navLink} instead
        //             {this.renderErrors()}
        //             <div className="login-form">
        //                 <br/>
        //                 <label>Username:
        //                     <input type="text"
        //                         value={this.state.username}
        //                         onChange={this.update('username')}
        //                         className="login-input"
        //                         placeholder="Username"
        //                     />
        //                 </label>
        //                 <br/>
        //                 {email}
        //                 <label>Password:
        //                     <input type="password"
        //                         value={this.state.password}
        //                         onChange={this.update('password')}
        //                         className="login-input"
        //                         placeholder="Password"
        //                     />
        //                 </label>
        //                 <br/>
        //                 <input className="session-submit" type="submit" value={this.props.formType} />
        //                 <br/>
        //                 <button className="demo_user" onClick={this.demoLogin}>User Demo</button>
        //             </div>
        //         </form>
        //     </div>
        // )
    }
}

export default SessionForm;