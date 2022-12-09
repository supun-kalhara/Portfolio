import React from "react";
import "./styles.scss";

const Header = () => {
    return (
        <div
            style={{ backgroundColor: "#FFF0F800" }}
            className="navbar-main navbar navbar-expand-lg navbar-dark navbar-main"
        >
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>
                        <div className="navitem-border"></div>
                        <li className="nav-item">
                            <a
                                className="nav-link "
                                aria-current="page"
                                href="#profile"
                            >
                                Profile
                            </a>
                        </li>
                        <div className="navitem-border"></div>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Work
                            </a>
                        </li>
                        <div className="navitem-border"></div>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text">Supun Kalhara</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
