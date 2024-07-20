import {React, useState} from "react";

import { Carousel, Drawer } from "antd";
import { workInfo } from "./constants"

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
            {console.log(image)}
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
            return (
                <div className="work-column" onClick={ () => showDrawer(i)}>
                    <div className={i % 2 ? "work-column-style-line work-line-odd" :"work-column-style-line"}></div>
                    <img src={item.thumbnail} className="vop-demo"/>
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
