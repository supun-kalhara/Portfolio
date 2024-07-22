import {React, useState} from "react";

import { Carousel, Drawer } from "antd";
import { workInfo } from "./constants"
import workRec from "../../images/assets/work_rec.jpg"
import workRecOdd from "../../images/assets/work_rec_odd.jpg"

import "./styles.sass";
import "antd/lib/carousel/style/css";
import "antd/lib/drawer/style/css";


const Work = () => {
    const [open, setOpen] = useState(false);
    const [drawerNo, setDrawerNo] = useState(0);
    const showDrawer = (drawer) => {
        setDrawerNo(drawer);
        setOpen(true);

    };
    const onClose = () => {
        setOpen(false);
    };

    const renderImages = () => {
        return workInfo[drawerNo].images.map((image) => {
            return(
                <div>
                    <img src={image} />
                </div>
            )
        })

    };

    const renderDescription = () => {
        return(
            <div className="description-wrapper">
                <div className="info">
                    <h2>{workInfo[drawerNo].title}</h2>
                    <p>{workInfo[drawerNo].description}</p>{
                        workInfo[drawerNo].info.map((text) => {
                            return <p>- {text}</p>
                        })
                    }
                </div>
                <div className="stack">
                    <h2>Stack</h2>
                    {workInfo[drawerNo].stack.map((framework) => {
                        return <div>{framework[0].toUpperCase() + framework.slice(1)}</div>
                    })}
                </div>
            </div>
        )
    };

    const renderWorkItems = () => {
        return workInfo.map((item, i) => {
            var odd = i % 2
            return (
                <div className="work-column" onClick={ () => showDrawer(i)}>
                    <div className={odd ? "work-no work-no-odd" : "work-no"}>{i+1}</div>
                    <div className={odd ? "work-column-style-line work-line-odd" :"work-column-style-line"}></div>
                    <img src={odd ? workRecOdd : workRec} className="vop-demo"/>
                </div>
            )
        })
    }

    return (
        <> 
            <Drawer onClose={onClose} open={open} size="large" className="ant-work-drawer">
                <Carousel className="work-carousel-img" autoplay={true} draggable={true}>
                    {renderImages()}
                </Carousel>
                {renderDescription()}
            </Drawer>
            <div className="work-section" id="work">
                <div className="work-section-wrapper">
                    <div className="row">
                        {renderWorkItems()}
                    </div>
                </div>
                <div className="page-title-header">Work</div>
            </div>
        </>
    );
};

export default Work;
