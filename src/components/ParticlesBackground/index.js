import React from "react";
import "./styles.scss";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles";

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    return (
        <div className="particles-wrapper">
            {/* <Particles
                id="particles"
                init={particlesInit}
                options={particlesConfig}
            /> */}
        </div>
    );
};

export default ParticlesBackground;
