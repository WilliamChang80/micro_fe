import React from "react";

const ErrorPage = () => {
  return (
    <div className="error">
      <div className="error-status">404</div>
      <div className="error-message">
        Sorry, the page you requested is not found. Here, enjoy the pizza!
      </div>
      <img
        src={require("../images/404.gif")}
        className="error-image"
        alt="404"
      />
    </div>
  );
};

export default ErrorPage;
