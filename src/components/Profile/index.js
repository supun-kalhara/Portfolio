import { React } from "react";

import { Card, Divider, Timeline } from "antd";
import { UpOutlined } from "@ant-design/icons";

import "antd/lib/card/style/css";
import "antd/lib/divider/style/css";
import "antd/lib/timeline/style/css";
import "./styles.sass";
import { techStack } from "../../images";

const Profile = () => {
    const renderLogo = (item, index) => {
        const level = (item.level / 20) * 100 * (80 / 100);
        return (
            <div className="tech-graph-sub-wrapper">
                {index === 0 ? (
                    <div className="graph-label">
                        <UpOutlined />
                        <span className="graph-label-text">profeciency</span>
                    </div>
                ) : null}
                <div
                    className={`graph-column ${item.alt + "-graph"}`}
                    style={{ height: `${level}%` }}
                ></div>
                <a href={item.ref} target="_blank" rel="noreferrer">
                    <img
                        className={`tech-stack-logo ${item.alt}`}
                        src={item.logo}
                        alt={item.alt}
                    />
                </a>
            </div>
        );
    };

    return (
        <div className="profile-section text" id="profile">
            <div className="profile-section-sub-wrapper">
                {/* <div className="profile-header-wrapper">
                    <h1 className="profile-header">Profile</h1>
                </div> */}
                <Divider>Profile</Divider>
                <div className="profile-body-wrapper">
                    <div className="profile-body-border-wrapper">
                        {/* Border Elements */}
                        <div class="overlay-element top-right"></div>
                        {/* <div class="overlay-element top-right"></div>
                        <div class="overlay-element bottom-left"></div> */}
                        <div class="overlay-element bottom-left"></div>
                        <Card
                            title="About Me"
                            // extra={<a href="#">More</a>}
                            style={{
                                backgroundColor: "",
                                boxShadow:
                                    "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                            }}
                        >
                            <div className="profile-body-sub-wrapper">
                                <div className="profile-body-content-left">
                                    <p>
                                        I'm a web developer with over 3 years of
                                        experience.
                                    </p>
                                    <p>
                                        My experience includes working with and
                                        leading serveral teams on different web
                                        applications with specific requirements
                                        related to different industries. In the
                                        past I've managed to take requirements
                                        and work alongside clients to translate
                                        their intial ideas into exlemplary
                                        applications that fully align with their
                                        overall vision.
                                    </p>
                                </div>
                                <Divider type="vertical" />
                                <div className="profile-body-content-right">
                                    <Timeline>
                                        <Timeline.Item>
                                            Created a construction related
                                            application using Django for the
                                            Climate Launchpad Competition,
                                            winning first place in the national
                                            finals and presenting the
                                            application in the regional finals
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            Built several CRUD applications for
                                            small businesses using codeigniter
                                            and laravel
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            Led a university team to build a
                                            tourist catalogue application using
                                            Django
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            Worked at 99x Sri Lanka, building
                                            features for an employee engagement
                                            application
                                        </Timeline.Item>
                                    </Timeline>
                                </div>
                            </div>
                            <div className="profile-body-footer-wrapper">
                                <div className="profile-body-footer">
                                    <p className="tech-header">
                                        Tech I've worked with
                                    </p>
                                    <div className="tech-graph-wrapper">
                                        {techStack.map((item, index) => {
                                            return renderLogo(item, index);
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
