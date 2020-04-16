import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Navbar from "../components/Navbar";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    );
  }
}

export default MainPage;
