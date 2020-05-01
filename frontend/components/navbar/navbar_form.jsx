import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
        this.container = React.createRef();

        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleClickButton() {
        this.setState({ open: !this.state.open })
    }

    handleClickOutside(e) {
        if (this.container.current && !this.container.current.contains(e.currentTarget)) {
            this.setState({
                open: false
            })
        }
    }

    componentWillMount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    closeDropDown() {
        this.setState({ open: false });
    }

    logout() {
        this.props.logout().then(() => this.closeDropDown());
    }

    loggedout() {
        const { openModal } = this.props;
        return (
            <div className="session-btn">
                <button id="login-btn" onClick={() => openModal("login")}>Sign in</button>
                <button id="signup-btn" onClick={() => openModal("signup")}>Get Started</button>
            </div>
        );
    }

    loggedin() {
        let { currentUser } = this.props;

        return (
            <div className="dropdown-box">
                <button className="current-user-name" onClick={this.handleSubmit}>
                    {currentUser.username[0].toUpperCase()}
                </button>

                {this.state.open && (
                    <ul ref={this.container} classNmae="dropdown-content">
                        <div className="user-info-1">
                            <li className="current-user">
                                {currentUser.username[0].toUpperCase()}
                            </li>
                            <div className="user-info-2">
                                <li className="current-username">
                                    {currentUser.username.slice(0,4)}
                                </li>
                            </div>
                        </div>
                        <button id="logout-btn" onCLick={this.logout}>Log out</button>
                    </ul>
                )}

            </div>
        )
    }

    render() {
        let { currentUser } = this.props;
        return currentUser ? this.loggedin(currentUser) : this.loggedout();
    }

}

export default NavBar;