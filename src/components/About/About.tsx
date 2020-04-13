import React from 'react';
import '../../App.css';
import './About.css';
import {Navbar} from '../Navbar/Navbar';
import {CLEAN_CODE_LINK, PLURALSIGHT_LINK} from "../../constants";
import {Links} from "../Links/Links";

const headshot = require('../../images/headshot.jpg');

export const About = (props: { selectedButton: string, changeSelectedButton: any }) => {
    const {selectedButton, changeSelectedButton} = props;
    return (
        <div>
            <div className="Header">
                <Navbar selectedButton={selectedButton} changeSelectedButton={changeSelectedButton}/>
            </div>
            <div className="Container">
                <body className="About">
                <img src={headshot} style={{width: '400px', height: '400px'}} alt='Headshot'/>
                <p>
                    I am a self-taught programmer and have become adept at learning new technologies quickly. I love
                    automating mundane tasks to save time. I'm a strong advocate of test-driven development and
                    pair-programming, and I write software exclusively in <a href={CLEAN_CODE_LINK} target={"_blank"}
                                                                             rel={"noopener noreferrer"}>clean code</a>.
                </p>
                <section>
                    <h3>Professional Experience</h3>
                    <p>
                        <li>
                            Hands-on experience using Node.js and the AWS serverless application model to
                            productionalize machine learning models
                        </li>
                        <li>
                            Experience refactoring and maintaining React.js and Python code
                        </li>
                    </p>
                    <h3>Coursework</h3>
                    <p>
                        <li>Watched over 30 hours of course
                            content on <a href={PLURALSIGHT_LINK} target={"_blank"}
                                          rel={"noopener noreferrer"}>Pluralsight</a> spanning the topics of Java
                            fundamentals, test-driven development, Java testing frameworks,
                            object-oriented programming, and AWS frameworks
                        </li>
                        <li>
                            Scored in the 88th percentile on Pluralsight's Java Fundamentals assessment.
                        </li>
                    </p>
                </section>
                <section>
                    <h3>Education</h3>
                    <p>
                        <li>
                            Graduated from Northwestern University with a Bachelor's Degree in Math and Economics.
                        </li>
                    </p>
                </section>
                <section>
                    <h3>Interests</h3>
                    <p>
                        I play golf when it's over 40 degrees out, and paddle tennis otherwise. I also enjoy watching
                        football, playing the piano, and producing music.
                    </p>
                </section>
                </body>
            </div>
            <Links/>
        </div>
    );
};
