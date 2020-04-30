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
                <li>
                    <div>
                        <button className="splash-btn-1" onClick={openModal}>
                            Get started
                        </button>
                        <div className="splash-page-2">
                            <p>Already have an account?</p>
                            <button className="splash-btn-2" onClick={openModal}>
                                Sign in
                            </button>
                        </div>
                    </div>
                </li>
                
            </ul>
        )
    }

}