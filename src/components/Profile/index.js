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
            {/* <div className="content-wrapper"> */}
                <div className="right-elements-background">
                    <div className="header-container">
                        <h1>I Design</h1>
                        <h1>&</h1>
                        <h1>Create</h1>
                        <h1>Websites</h1>
                    </div>
                </div>
                <div className="left-elements-background"></div>
            {/* </div> */}
            <div className="profile-section-sub-wrapper">
            <div className="overlay-element top-right"></div>
            <div className="overlay-element bottom-left"></div>
            <div className="page-title-header">Profile</div>
            
            </div>
        </div>
    );
};

export default Profile;
