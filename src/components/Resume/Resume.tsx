import React from 'react';
import './Resume.css';
import {GOOGLE_DOCS_EMBED_LINK_FOR_RESUME} from "../../constants";
import {Navbar} from '../Navbar/Navbar';
import {Links} from "../Links/Links";

export const Resume = (props: { selectedButton: string, changeSelectedButton: any }) => {
    const {selectedButton, changeSelectedButton} = props;
    return (
        <div>
            <div className="Header">
                <Navbar selectedButton={selectedButton} changeSelectedButton={changeSelectedButton}/>
            </div>
            <div className="Container">
                <body className="Resume">
                <iframe title={'Resume'} src={GOOGLE_DOCS_EMBED_LINK_FOR_RESUME} scrolling="no"/>
                </body>
            </div>
            <Links/>
        </div>
    );
};
