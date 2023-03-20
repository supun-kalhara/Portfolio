import React from "react";
import "./styles.sass";

const Work = () => {
    return (
        <div className="work-section">
            <div className="work-section-wrapper">
                <div className="row">
                    <div className="work-section-top-left"></div>
                    <div className="work-section-top-right"></div>
                </div>
                <div className="row bottom">
                    <div className="work-section-bottom-right"></div>
                    <div className="work-section-bottom-left"></div>
                </div>
                {/* <table>
                    <tr>
                        <td>
                            <div className="work-section-top-left"></div>
                        </td>
                        <td>
                            <div className="work-section-top-right"></div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table> */}
            </div>
            <div className="page-title-header">Work</div>
        </div>
    );
};

export default Work;
