import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Inputs from "./Inputs";
import Charts from "./Charts";
import Table from "./Table";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">          
          <ul className="header">
            <li><NavLink exact to="/">Inputs</NavLink></li>
            <li><NavLink to="/charts">Charts</NavLink></li>
            <li><NavLink to="/table">Table</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Inputs}/>
            <Route path="/charts" component={Charts}/>
            <Route path="/table" component={Table}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
