import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { history } = this.props;
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="nav-item">
          <p className="title" onClick={() => history.push("/dashboard")}>
            Food API
          </p>
          <p onClick={() => history.push("/food/create")}>Create Food</p>
        </div>
      </nav>
    );
  }
}

export default Navbar;
