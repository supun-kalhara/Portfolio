//components
import Header from "./components/Header";
import ParticlesBackground from "./components/ParticlesBackground";
import Profile from "./components/Profile";
import Work from "./components/Work";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { useSpring, animated, useChain, useSpringRef } from "react-spring";
import cherryImg from "./images/assets/cherry_png.png";

function App() {
    // const animationHeaderRef1 = useSpringRef();
    // const animatedHeader1 = useSpring({
    //     from: { opacity: 1, marginTop: 500 },
    //     to: { opacity: 1, marginTop: 0 },
    //     ref: animationHeaderRef1,
    // });

    // const animationHeaderRef2 = useSpringRef();
    // const animatedHeader2 = useSpring({
    //     from: { opacity: 0 },
    //     to: { opacity: 1 },
    //     ref: animationHeaderRef2,
    // });

    // const animationHeaderRef3 = useSpringRef();
    // const animatedHeader3 = useSpring({
    //     from: { opacity: 0, marginRight: "200px" },
    //     to: { opacity: 1, marginRight: "0px" },
    //     ref: animationHeaderRef3,
    // });

    // useChain([animationHeaderRef1, animationHeaderRef2, animationHeaderRef3]);
    return (
        <div className="main-component">
            <div>
                <Home />
            </div>
            {/* <div className="overlay-element top-right"></div>
            <div className="overlay-element bottom-left"></div>
            <div className="right-elements-background turquoise-background">
                <img src={cherryImg} />
            </div>
            <div className="left-elements-background">
                <div className="header-container">
                    <h1>I Design</h1>
                    <h1>&</h1>
                    <h1>Create</h1>
                    <h1>Websites</h1>
                </div>
            </div>
            <Header />
            <ParticlesBackground />
            <div className="main-header-wrapper">
                <div className="main-header">
                    <h1>
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
                    </div> 
                </div>
            </div> */}
            <div>
                <Profile />
            </div>
            <div>
                <Work />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    );
}

export default App;
