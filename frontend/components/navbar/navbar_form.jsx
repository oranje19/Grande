import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
        // this.container = React.createRef();


        this.handleClickButton = this.handleClickButton.bind(this);
        // this.handleClickOutside = this.handleClickOutside.bind(this);
        // this.closeDropDown = this.closeDropDown.bind(this);
        // this.logout = this.logout.bind(this);

        // this.handleDropDown = this.handleDropDown.bind(this);

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);

    }

    handleClickButton() {
        this.setState({ open: !this.state.open })
        // this.props.history.push("/new/story")
    }

    // handleClickOutside(e) {
    //     if (this.container.current && !this.container.current.contains(e.currentTarget)) {
    //         this.setState({
    //             open: false
    //         })
    //     }
    // }

    showMenu(e) {
        e.preventDefault();
        this.setState({ open: true }, () => {
            document.addEventListener('click', this.closeMenu)
        })
    }

    closeMenu(e) {
        if (!this.open.contains(e.target))
            this.setState({
                open: false
            }, () => {
                document.removeEventListener('click', this.closeMenu)
            })
    }

    // componentWillMount() {
    //     document.removeEventListener('mousedown', this.handleClickOutside);
    // }

    // componentDidMount() {
    //     document.addEventListener('mousedown', this.handleClickOutside);
    // }

    // closeDropDown() {
    //     this.setState({ open: false }, () => console.log("hello"));
    // }

    // handleDropDown() {
    //     this.closeDropDown().then(console.log("hello"));
    //     // () => this.props.history.push("/new/story")
    // }

    logout() {
        this.props.logout().then(() => this.closeDropDown());
    }

    loggedout() {
        const { openModal, currentUser } = this.props;
        // const email = currentUser.email ? currentUser.email.split("@")[0] : null 
        return (
            <div className="session-btn">
                <Link to="/" className="top-left-title">Grande</Link>
                <div className="session-btn-2">
                    <button id="login-btn" onClick={() => openModal("login")}>Sign in</button>
                    <button id="signup-btn" onClick={() => openModal("signup")}>Get started</button>
                </div>
            </div>
        );
    }

    loggedin() {
        let { currentUser } = this.props;
        
        return (
            <div className="dropdown-box">
                <Link to="/" className="top-left-title">Grande</Link>
                <button className="current-user-name" onClick={this.handleClickButton}>
                    {currentUser.username[0].toUpperCase()}
                </button>

                

                {/* {this.state.open && ( */}
                {this.state.open ? 
                    <ul ref={(ele) => this.container = ele} className="dropdown-content">
                        <div className="user-info-1">
                            <li className="current-user">
                                {currentUser.username[0].toUpperCase()}
                            </li>
                            <div className="user-info-2">
                                <li className="current-username">
                                    {currentUser.username.slice(0,4)}
                                </li>
                                {/* <li>@{email}</li> */}
                            </div>
                        </div>
                        <div className="dropdown-action">
                            <li className="dropdown-list" onClick={this.closeMenu}>
                                <Link to="/new/story">New story</Link>
                            </li>
                            <li className="dropdown-list" onClick={this.closeMenu}>
                                <Link to={`/users/${currentUser.id}/stories`}>Stories</Link>
                            </li>
                            {/* <li className="dropdown-list" onClick={this.closeDropDown}>
                                <Link>Profile</Link>
                            </li>
                            <li className="dropdown-list" onClick={this.closeDropDown}>
                                <Link>Settings</Link>
                            </li> */}
                        </div>
                        <button className="logout-button" onClick={this.logout}>Log out</button>
                    </ul>
                    : null
                }

            </div>
        )
    }

    render() {
        let { currentUser } = this.props;
        return currentUser ? this.loggedin(currentUser) : this.loggedout();
    }

}

export default withRouter(NavBar);