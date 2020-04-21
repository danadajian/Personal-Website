import React from 'react';
import '../../App.css';
import './Home.css';
import {Navbar} from '../Navbar/Navbar';
import {Links} from "../Links/Links";

export const Home = () => {
    return (
        <div className="Home">
            <div className="Overlay">
                <Navbar initialState={'Home'}/>
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
