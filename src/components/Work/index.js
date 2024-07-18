import React from "react";
import "./styles.sass";
import workRec from "../../images/assets/work_rec.jpg";
import workRecOdd from "../../images/assets/work_rec_odd.jpg";

const Work = () => {
    return (
        <div className="work-section">
            <div className="work-section-wrapper">
                <div className="row">
                    <div className="work-column">
                        <div className="work-column-style-line"></div>
                        <img src={workRec} />
                    </div>
                    <div className="work-column-odd">
                        <img src={workRecOdd} />
                    </div>
                    <div className="work-column">
                        <div className="work-column-style-line"></div>
                        <img src={workRec} />
                    </div>
                    <div className="work-column-odd">
                        <img src={workRecOdd} />
                    </div>
                </div>
            </div>
            <div className="page-title-header">Work</div>
        </div>
    );
};

export default Work;
