import React from 'react';
import './Links.css';
import {GITHUB_LINK, LINKED_IN_LINK} from "../../constants";

const linkedIn = require('../../images/linkedin.svg');
const github = require('../../images/github.svg');

export const Links = () => {
    return (
        <div className="Links">
            <a href={LINKED_IN_LINK} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={linkedIn} alt={'LinkedIn'}/>
            </a>
            <a href={GITHUB_LINK} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={github} alt={'GitHub'}/>
            </a>
        </div>
    );
};
