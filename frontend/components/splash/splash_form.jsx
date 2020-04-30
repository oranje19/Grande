import React from 'react';

class Splash extends React.Component {
    
    render() {
        const { openModal } = this.props;

        return (
            <ul className="splash">
                <h1>Get smarter about what matters to you.</h1>
                <p className="splash-page-1">
                    Select what you're into. We'll help you find great things to read.
                </p>
                <span>
                    <div>
                        <button className="splash-btn-1" onClick={openModal}>
                            Get started
                        </button>
                        <div className="splash-page-2">
                            <p>Already have an account? </p>
                            <button className="splash-btn-2" onClick={openModal}>
                                Sign in
                            </button>
                        </div>
                    </div>
                </span>
                <span>
                    <ul className="splash-check-list">
                        <li className="splash-green-check">
                            <div>
                                <div>World-class publications.</div>
                            </div>
                        </li>
                        <li className="splash-green-check">
                            <div>
                                <div>Undiscovered voices.</div>
                            </div>
                        </li>
                        <li className="splash-green-check">
                            <div>
                                <div>Topics you love.</div>
                            </div>
                        </li>

                    </ul>
                    <ul className="splash-sub-title">
                        All on Grande, all for you.
                    </ul>
                </span>
                <span>
                    <div className="splash-sub-1">
                        <div className="splash-sub-message">No ads. No problems.</div>
                    </div>
                </span>
            </ul>
        )
    }

}

export default Splash;