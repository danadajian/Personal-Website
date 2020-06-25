import React from 'react';
import '../../App.css';
import './About.css';
import {Navbar} from '../Navbar/Navbar';
import {CLEAN_CODE_LINK} from "../../constants";
import {Links} from "../Links/Links";

const headshot = require('../../images/headshot.jpg');

export const About = () => {
    return (
        <div>
            <div className="Header">
                <Navbar initialState={'About'}/>
            </div>
            <div className="Container">
                <div className="About">
                    <section>
                        <body>
                        <img src={headshot} alt='Headshot'/>
                        <p>
                            I am a self-taught programmer who loves automating tasks and learning new
                            technologies. As a strong advocate of test-driven development and
                            pair-programming, I strive to write software guided by the principles of <a
                            href={CLEAN_CODE_LINK} target={"_blank"} rel={"noopener noreferrer"}>clean code</a>.
                        </p>
                        </body>
                    </section>
                    <section>
                        <body>
                        <h3>Professional Experience</h3>
                        <ul>
                            <li>
                                Data pipeline architecture using the AWS serverless application model
                            </li>
                            <li>
                                Leveraging AWS Lambda and Batch to productionalize machine learning models
                            </li>
                            <li>
                                Full-stack .NET web application development using MVC framework
                            </li>
                        </ul>
                        </body>
                    </section>
                    <section>
                        <body>
                        <h3>Education</h3>
                        <ul>
                            <li>
                                Graduated from Northwestern University with a Bachelor's Degree in Math and Economics
                            </li>
                        </ul>
                        </body>
                    </section>
                    <section>
                        <body>
                        <h3>Interests</h3>
                        <ul>
                            <li>
                                I play golf when it's over 40 degrees out, and paddle tennis otherwise.
                            </li>
                            <li>
                                I enjoy watching football, playing the piano, and building software!
                            </li>
                        </ul>
                        </body>
                    </section>
                </div>
            </div>
            <Links/>
        </div>
    );
};
