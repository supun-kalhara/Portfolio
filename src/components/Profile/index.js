import { React } from "react";

import { Card, Divider, Timeline } from "antd";
import { UpOutlined } from "@ant-design/icons";

import "antd/lib/card/style/css";
import "antd/lib/divider/style/css";
import "antd/lib/timeline/style/css";
import "./styles.sass";

const Profile = () => {
    return (
        <div className="profile-section text" id="profile">
            <div className="grey-background right-elements-background">
                <div className="header-container">
                    <h1>I Believe in</h1>
                    <h1>Functionality</h1>
                    <h1>& Good</h1>
                    <h1>Design</h1>
                </div>
            </div>
            <div className="left-elements-background">
                <div className="profile-info-scroll-section">
                    <div className="profile-info-scroll-item first-element">
                        I'm a web developer with over 3 years of experience
                    </div>
                    <div className="profile-info-scroll-item">
                        Built CRUD products for a multitude of small businesses
                    </div>
                    <div className="profile-info-scroll-item">
                        Translated initial ideas into exemplary applications
                        that fully align with the overall vision
                    </div>
                    <div className="profile-info-scroll-item">
                        Created a construction app that won the national finals
                        at the Climate Launchpad Competition
                    </div>
                    <div className="profile-info-scroll-item">
                        Lead several teams to create different web applications
                        in multiple industries
                    </div>
                    <div className="profile-info-scroll-item">
                        Created Chat & Survey Features for an Employee
                        Engagement Platform
                    </div>
                </div>
            </div>
            <div className="page-title-header">Profile</div>
        </div>
    );
};

export default Profile;
