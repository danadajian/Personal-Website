import React from 'react';
import './Projects.css';
import {Navbar} from '../Navbar/Navbar';
import {Links} from "../Links/Links";
import {DFS_OPTIMIZER_SITE, GITHUB_LINK, KNAPSACK_PROBLEM_LINK} from "../../constants";

const dfsOptimizerExample = require('../../images/dfs-optimizer-example.png');

export const Projects = (props: { selectedButton: string, changeSelectedButton: any }) => {
    const {selectedButton, changeSelectedButton} = props;
    return (
        <div>
            <div className="Header">
                <Navbar selectedButton={selectedButton} changeSelectedButton={changeSelectedButton}/>
            </div>
            <div className="Container">
                <div className="Projects">
                    <section>
                        <body>
                        <h1>Daily Fantasy Sports Lineup Optimizer</h1>
                        <a href={DFS_OPTIMIZER_SITE} target={"_blank"}
                           rel={"noopener noreferrer"}>https://dfsoptimizer.app</a>
                        <h3>Overview</h3>
                        <p>
                            My Daily Fantasy Sports (DFS) lineup optimizer aims to generate a lineup of players such
                            that the lineup's total projected points are maximized, given the constraint that the
                            lineup's total salary is within the salary cap. Each player has a position, a projection,
                            and a salary, and a lineup must contain a certain number of each position. The optimization
                            problem presented here is a type of <a href={KNAPSACK_PROBLEM_LINK}>knapsack problem</a>,
                            which involves picking items with weights and values optimally to fit inside a knapsack.
                        </p>
                        <img src={dfsOptimizerExample} alt={'DFS Optimizer Example'}/>
                        <h3>My Solution</h3>
                        <p>
                            The method I developed uses what I call "selective brute force", which reduces the problem
                            efficiently to make checking all possibilities feasible. First, players are grouped by
                            position
                            and sorted by their salary-to-projection ratios. Then, players are removed from each
                            position
                            pool until the maximum number of lineup combinations is under a specified fixed threshold.
                            Finally, a recursive algorithm efficiently iterates over possible lineups one by one,
                            ensuring
                            each new lineup it checks has the potential to be better (i.e. has a higher projected point
                            total).
                        </p>
                        <p>
                            The app currently supports Fanduel and Draftkings contests, and scrapes data from multiple
                            sources.
                        </p>
                        </body>
                    </section>
                    <section>
                        <body>
                        <h3>More project overviews coming soon! In the meantime, check out my <a
                            href={GITHUB_LINK} target={"_blank"}
                            rel={"noopener noreferrer"}>GitHub</a>.
                        </h3>
                        </body>
                    </section>
                </div>
            </div>
            <Links/>
        </div>
    );
};
