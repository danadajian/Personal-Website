import React from 'react';
import '../../App.css';
import './Home.css';
import {Navbar} from '../Navbar/Navbar';

const chicagoSkyline = require('../../images/chicago.jpg');

export const Home = (props: {selectedButton: string, changeSelectedButton: any}) => {
    const {selectedButton, changeSelectedButton} = props;
    return (
        <div className="Home">
            <header className="Overlay">
                <Navbar selectedButton={selectedButton} changeSelectedButton={changeSelectedButton}/>
                <h1>Dan Adajian</h1>
                <p>
                    Welcome to my site! I'm a software developer from Chicago, IL.
                </p>
            </header>
            <img src={chicagoSkyline} alt='chicago'/>
        </div>
    );
};
