import React from 'react';
import './Projects.css';
import {Navbar} from '../Navbar/Navbar';

export const Projects = (props: { selectedButton: string, changeSelectedButton: any }) => {
    const {selectedButton, changeSelectedButton} = props;
    return (
        <div>
            <div className="Header">
                <Navbar selectedButton={selectedButton} changeSelectedButton={changeSelectedButton}/>
            </div>
            <div className="Container">
                <body className="Projects">
                <p>
                    Coming soon!
                </p>
                </body>
            </div>
        </div>
    );
};
