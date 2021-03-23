import React from "react";

const LoadingBar = () => {
  return (
    <div className="container">
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "100%" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingBar;
