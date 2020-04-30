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
        this.props.processDemo(this.demoUser);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
                <label>Email:
                            <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                        placeholder="Email"
                    />
                    <br />
                </label>
            )
        } else {
            email = null;
        }

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    Welcome to Grande!
                    <br/>
                    Please {this.props.formType} or {this.props.navLink} instead
                    {this.renderErrors()}
                    <div className="login-form">
                        <br/>
                        <label>Username:
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                placeholder="Username"
                            />
                        </label>
                        <br/>
                        {email}
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder="Password"
                            />
                        </label>
                        <br/>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <br/>
                        <button className="demo_user" onClick={this.demoLogin}>User Demo</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;