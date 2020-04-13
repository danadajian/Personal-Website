import React from 'react';
import '../../App.css';
import './About.css';
import {Navbar} from '../Navbar/Navbar';
import {CLEAN_CODE_LINK, PLURALSIGHT_LINK} from "../../constants";

export const About = (props: { selectedButton: string, changeSelectedButton: any }) => {
    const {selectedButton, changeSelectedButton} = props;
    return (
        <div>
            <div className="Header">
                <Navbar selectedButton={selectedButton} changeSelectedButton={changeSelectedButton}/>
            </div>
            <div className="Container">
                <body className="About">
                <section>
                    <h1>
                        Development Skills
                    </h1>
                    <p>
                        I am self-taught and have become adept at learning new technologies quickly.
                        I'm a strong advocate of test-driven development and pair-programming,
                        and I write software exclusively in <a href={CLEAN_CODE_LINK}>clean code</a>.
                    </p>
                    <h3>Professional</h3>
                    <p>
                        I have hands-on experience using Node.js and the AWS serverless application model to
                        productionalize machine learning models. I have also refactored and maintained React.js and
                        Python code.
                    </p>
                    <h3>Coursework</h3>
                    <p>
                        I have watched over 30 hours of course
                        content on <a href={PLURALSIGHT_LINK}>Pluralsight</a> spanning the topics of Java fundamentals,
                        test-driven development, Java testing frameworks, object-oriented programming, and AWS
                        frameworks.
                        I subsequently scored in the 88th percentile on Pluralsight's Java Fundamentals assessment.
                    </p>
                </section>
                <section>
                    <h1>
                        Education
                    </h1>
                    <p>
                        I graduated from Northwestern University with a Bachelor's Degree in Math and Economics.
                    </p>
                </section>
                <section>
                    <h1>
                        Interests
                    </h1>
                    <p>
                        I play golf when it's over 40 degrees out, and paddle tennis otherwise. I love the feeling I get
                        when I automate a mundane task. I enjoy watching football, playing the piano, and producing
                        music.
                    </p>
                </section>
                </body>
            </div>
        </div>
    );
};
