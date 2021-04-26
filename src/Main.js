import React, {Component} from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Jackie from "./jackieaina";
import Toomuchmouth from "./toomuch";
import HeyParis from "./paris";

class Main extends Component{
    render(){
        return(
            <HashRouter>
            <div>
                <h1>
                    Popular Black Content creator
                </h1>
                <ul className="header">
                <li><NavLink exact to="/">Jackie Aina</NavLink></li>
                <li><NavLink to="/heyparis">HeyParis</NavLink></li>
                <li><NavLink to="/toomuch">TooMuchMouth</NavLink></li>
                </ul>
                <div className="content">
                <Route exact path="/" component={Jackie}/>
                <Route path="/heyparis" component={HeyParis}/>
                <Route path="/toomuch" component={Toomuchmouth}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default Main;