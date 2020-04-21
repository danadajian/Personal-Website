import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";
import {Resume} from "./components/Resume/Resume";
import {Projects} from "./components/Projects/Projects";
import ScrollToTop from "./ScrollToTop";

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Route path="/" render={() => <Home/>} exact/>
                    <Route path="/about" render={() => <About/>}/>
                    <Route path="/resume" render={() => <Resume/>}/>
                    <Route path="/projects" render={() => <Projects/>}/>
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default App;
