import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";
import {Resume} from "./components/Resume/Resume";
import {Projects} from "./components/Projects/Projects";

class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {selectedButton: 'home'}
    }

    changeSelectedButton = (selectedButton: string) => {
        this.setState({selectedButton})
    };

    render() {
        const {selectedButton}: any = this.state;
        return (
            <main>
                <Switch>
                    <Route path="/" render={() => <Home selectedButton={selectedButton}
                                                        changeSelectedButton={this.changeSelectedButton}/>} exact/>
                    <Route path="/about" render={() => <About selectedButton={selectedButton}
                                                              changeSelectedButton={this.changeSelectedButton}/>}/>
                    <Route path="/resume" render={() => <Resume selectedButton={selectedButton}
                                                                changeSelectedButton={this.changeSelectedButton}/>}/>
                    <Route path="/projects" render={() => <Projects selectedButton={selectedButton}
                                                                    changeSelectedButton={this.changeSelectedButton}/>}/>
                </Switch>
            </main>
        );
    }
}

export default App;
