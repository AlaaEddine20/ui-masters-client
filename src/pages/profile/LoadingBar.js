import React from "react";

const LoadingBar = () => {
  return (
    <div className="container">
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "200px" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingBar;
