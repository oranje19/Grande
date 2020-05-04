import React from 'react';

class Splash extends React.Component {
    
    render() {
        const { openModal, openModalLogin } = this.props;

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
                            <p>Already have an account? </p>
                            <button className="splash-btn-2" onClick={openModalLogin}>
                                Sign in.
                            </button>
                        </div>
                    </div>
                </li>
                <li>
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
                </li>
                <li>
                    <div className="splash-sub-1">
                        <div className="splash-sub-message-1">No ads. No problems.</div>
                        <div className="splash-sub-message-2">Your privacy stays yours. We don't sell your data or target you with ads. Ever.</div>
                    </div>
                </li>
                <li>
                    {/* <div className="splash-sub-2">
                    </div> */}
                    <div className="splash-sub-3">
                        <div className="splash-sub-3-btn">
                            <button className="splash-btn-3" onClick={openModal}>Get started</button>
                        </div>
                        <div className="splash-sub-3-header">
                            <div className="splash-sub-3-title">We do things differently.</div>
                            <div className="splash-sub-3-message">
                                Grande is not like any other platform on the internet. <mark>Our sole purpose is to help you find compelling 
                                ideas, knowledge, and perspectives.</mark> We don't serve ads—we serve you, the curious 
                                reader who loves to learn new things. Grande is
                                home to thousands of independent voices, and
                                we combine humans and technology to find the 
                                best reading for you—and filter out the rest.
                            </div>
                        </div>
                    </div>
                </li>
                <li className="splash-sub-4">
                    <div className="splash-sub-message-4">Expand your reading. Expand your mind.</div>
                </li>
                <button className="splash-btn-4" onClick={openModal}>
                    Get started
                </button>
            </ul>
        )
    }

}

export default Splash;