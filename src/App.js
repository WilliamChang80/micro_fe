import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import "./style/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
