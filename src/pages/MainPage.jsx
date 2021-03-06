import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Navbar from "../components/Navbar";
import FoodForm from "./FoodForm";
import ErrorPage from "./ErrorPage";

class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <Switch>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route
            path="/food/create"
            component={FoodForm}
            history={this.props.history}
          />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default MainPage;
