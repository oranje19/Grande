import React from "react";


class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <h1>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/814/814513.svg" alt="earth" />
                    <p>Grande</p>{" "}
                </h1>
                <div className="footer-2">
                    <div className="footer-2-1">
                        
                        <div className="footer-medium">
                            <h2>Inspired by</h2>
                            <a target="_blank" href="https://medium.com/">
                                <img src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="Medium" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h2>Discover</h2>
                        <a target="_blank" href="https://www.renewableenergyworld.com/">REW</a>
                        <a target="_blank" href="https://cleantechnica.com/">Clean Technica</a>
                        <a target="_blank" href="https://alternativeenergy.procon.org/">ProCon</a>
                        <a target="_blank" href="https://www.rechargenews.com/">Recharge</a>
                    </div>

                    <div className="footer-info">
                        <h2>Contact me</h2>
                        <div className="footer-icons">
                            <a target="_blank" href="https://github.com/oranje19">
                                <i className="devicon-github-plain colored"></i>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/jasonwintery/">
                                <i className="devicon-linkedin-plain colored"></i>
                            </a>
                            <a target="_blank" href="http://www.jasonwintery.com/">
                                <img src="https://www.flaticon.com/svg/static/icons/svg/841/841364.svg" alt="Portfolio" />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </footer>
        )
    }
}

export default Footer;