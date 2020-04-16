import React, { Component } from "react";
import { Route } from "react-router-dom";

import MainPage from "./pages/MainPage";

import "./style/main.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <Route path="/" component={MainPage} />
        </div>
      </div>
    );
  }
}

export default App;
