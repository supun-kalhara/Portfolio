import {React, useState, useEffect} from "react";

import cherryImg from "../../images/assets/cherry_png.png";
import Header from "../../components/Header";
import ParticlesBackground from "../../components/ParticlesBackground";
import useScreenSize from "../../hooks/useScreenSize";
import { Modal } from 'antd';

import "antd/lib/modal/style/css";
import "antd/lib/button/style/css";

import "./styles.sass";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
      };

    const screenSize = useScreenSize();

    useEffect(() => {
        if (screenSize.width < 760){
            showModal();
        }
        else {
            closeModal()
        };
    }, [screenSize])

    return (
        <>
            <Modal 
                title="This site is currently not supported for mobile." 
                open={isModalOpen}
                onCancel={closeModal}
                footer={[
                ]}
            >
                <p>Please use a PC or Laptop</p>
            </Modal>
            <div className="home-section-wrapper">
                <div className="overlay-element bottom-left"></div>
                <div className="overlay-element top-right"></div>
                <div className="right-elements-background turquoise-background">
                    <img src={cherryImg} alt="sakura-tree-deco"/>
                </div>
                <div className="left-elements-background">
                    <div className="header-container">
                        <h1>I Design</h1>
                        <h1>&</h1>
                        <h1>Create</h1>
                        <h1>Software</h1>
                    </div>
                </div>
                <Header />
                <ParticlesBackground />
                <div className="main-header-wrapper">
                    <div className="main-header">
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
