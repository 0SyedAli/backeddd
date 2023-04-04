import React from "react";
import "./appSection.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const AppSection = () => {
  return (
    <div className="fix-app-container">
      <div className="container app-section">
        <div className="app-line"></div>
        <div className="apps">
          <div className="app1">
            <p>I'm a self-taught, full-time programmer self-taught</p>
            <div className="line1">
              <ProgressBar now={70} className="line line-1" />
            </div>
          </div>
          <div className="app1">
            <p>I'm a self-taught, full-time programmer self-taught</p>
            <div className="line1">
              <ProgressBar now={70} className="line line-2" />
            </div>
          </div>
          <div className="app1">
            <p>I'm a self-taught, full-time programmer self-taught</p>
            <div className="line1">
              <ProgressBar now={70} className="line line-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
