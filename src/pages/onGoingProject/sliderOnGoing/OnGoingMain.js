import React from "react";
import './onGoingMain.css'

const OnGoingMain = () => {
  return (
    <div>
      <div className=" container onGoingProject-main">
        <div className="left-onGoing">
          <div className="top-onGoing">
            <h1>Ongoing Projects</h1>
            <p>
              List as many team members as you want in two layout modes:
              standard & carousel. You can control and change the features of
              each.
            </p>
          </div>
          <div className="bottom-onGoing">
            <a href="/">Home</a>
            <span>&gt;</span>
            <a href="/">Progress</a>
          </div>
        </div>
        <div className="right-onGoing"></div>
      </div>
    </div>
  );
};

export default OnGoingMain;
