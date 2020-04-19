import React from 'react';
import '../../App.css';
import './Home.css';
import {Navbar} from '../Navbar/Navbar';
import {Links} from "../Links/Links";

export const Home = (props: {selectedButton: string, changeSelectedButton: any}) => {
    const {selectedButton, changeSelectedButton} = props;
    return (
        <div className="Home">
            <div className="Overlay">
                <Navbar selectedButton={selectedButton} changeSelectedButton={changeSelectedButton}/>
                <h1>Dan Adajian</h1>
                <p>
                    I'm a software developer from Chicago, IL.
                </p>
                <p>
                    Welcome to my site!
                </p>
                <Links/>
            </div>
        </div>
    );
};
