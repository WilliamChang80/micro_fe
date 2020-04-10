import React, { Component } from "react";
import Login from "pages/Login";
import "./App.css";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
