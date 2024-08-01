import React from "react";

import { HiArrowUpRight } from "react-icons/hi2";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMedium } from "react-icons/ai";
import { DiStackoverflow } from "react-icons/di";

import "./styles.sass";



const Contact = () => {
    return (
        <div className="contact-section" id="contact">
            <div className="grey-background right-elements-background">
                <div className="contact-name">
                    <span>Supun Kalhara</span>
                </div>
                <div className="contact-email">gl.supunkalhara@gmail.com</div>
                <div className="contact-wrapper">
                    <div className="contact-button"><a href="mailto:gl.supunkalhara@gmail.com">Reach Out <HiArrowUpRight /></a></div>
                    <div className="icon-wrapper">
                        <div>
                            <span className="linkedin">
                                <a href="https://www.linkedin.com/in/supun-kalhara/" target="_blank">
                                    <AiFillLinkedin />
                                </a>
                            </span>
                            <span className="github">
                                <a href="https://github.com/supun-kalhara" target="_blank">
                                    <AiFillGithub />
                                </a>
                            </span>
                        </div>
                        <div>
                            <span className="medium">
                                <a href="https://medium.com/@gl.supunkalhara" target="_blank">
                                    <AiOutlineMedium />
                                </a>
                            </span>
                            <span className="stack-overflow">
                                <a href="https://stackoverflow.com/users/16425641/supun-kalhara" target="_blank">
                                    <DiStackoverflow />
                                </a>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="left-elements-background">
                <div className="header-container">
                    <h1>I'll Help</h1>
                    <h1>Level up</h1>
                    <h1>Your Company</h1>
                </div>
            </div>
            <div className="page-title-header">Contact</div>
        </div>
    );
};

export default Contact;
