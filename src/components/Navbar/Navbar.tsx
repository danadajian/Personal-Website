import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {RESUME_DOWNLOAD_LINK} from "../../constants";

export const Navbar = (props: { selectedButton: string, changeSelectedButton: any }) => {
    const {selectedButton, changeSelectedButton} = props;
    return (
        <div className="Navbar">
            <Link onClick={() => changeSelectedButton('home')}
                  className={(selectedButton === 'home') ? "Selected" : "Unselected"} to="/">Home</Link>
            <Link onClick={() => changeSelectedButton('about')}
                  className={(selectedButton === 'about') ? "Selected" : "Unselected"} to="/about">About Me</Link>
            <div className="Resume">
                <Link onClick={() => changeSelectedButton('resume')}
                      className={(selectedButton === 'resume') ? "Selected" : "Unselected"} to="/resume">Resume</Link>
                <a id={'download-pdf'} className="Resume-dropdown" href={RESUME_DOWNLOAD_LINK}>Download PDF</a>
            </div>
            <Link onClick={() => changeSelectedButton('projects')}
                  className={(selectedButton === 'projects') ? "Selected" : "Unselected"} to="/projects">Projects</Link>
        </div>
    );
};
