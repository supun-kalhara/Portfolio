import React from "react";

import cherryImg from "../../images/assets/cherry_png.png";
import Header from "../../components/Header";
import ParticlesBackground from "../../components/ParticlesBackground";

import "./styles.sass";

const Home = () => {
    return (
        <div className="home-section-wrapper">
            <div className="overlay-element bottom-left"></div>
            <div className="overlay-element top-right"></div>
            <div className="right-elements-background turquoise-background">
                <img src={cherryImg} />
            </div>
            <div className="left-elements-background">
                <div className="header-container">
                    <h1>I Design</h1>
                    <h1>&</h1>
                    <h1>Create</h1>
                    <h1>Software</h1>
                </div>
            </div>
            <Header />
            <ParticlesBackground />
            <div className="main-header-wrapper">
                <div className="main-header">
                    {/* <h1>
                        <span>
                            <animated.div
                                style={animatedHeader1}
                                className="main-header-line1"
                            >
                                Hi, <br></br>
                            </animated.div>
                        </span>
                        <animated.div
                            style={animatedHeader2}
                            className="main-header-line2"
                        >
                            I'm a Web developer
                        </animated.div>
                    </h1>
                    <div className="sub-header">
                        <animated.div style={animatedHeader3}>
                            <p>Building Spectacular Sites </p>
                        </animated.div>
                    </div>  */}
                </div>
            </div>
        </div>
    );
};

export default Home;
