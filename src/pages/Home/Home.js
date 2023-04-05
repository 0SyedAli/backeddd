import React from "react";
import bgHome from "../../assets/images/business-plan-concept-3d-rendering-removebg-preview 1.svg";
import bgHeadPhone from "../../assets/images/Headphone-home.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="fix-container">
        <div className="home-container">
          <div className="home-text">
            <h1>Invest Your Amount With Our Project</h1>
            <div className="line1">
              <ProgressBar now={70} className="line" />
            </div>
            <div className="bg-numbers">
              <div className="pledged">
                <h3>$45,398</h3>
                <h3>$21,765</h3>
              </div>
              <div className="target">
                <p>Pledged</p>
                <p className="t-num">Target</p>
              </div>
            </div>
          </div>

          <div className="bg-home">
            <img className="img-home" src={bgHome} alt="Logo" />
          </div>
          {/* <div className="headphone-home">
            <img src={bgHeadPhone} alt="/" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
