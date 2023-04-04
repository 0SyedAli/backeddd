import React from "react";
import Button from "react-bootstrap/Button";
import "./invest.css";
import img1 from "../../../assets/images/book 1.svg";
import img2 from "../../../assets/images/Radio 1.svg";
import img3 from "../../../assets/images/Music 1.svg";

const Invest = () => {
  return (
    <div>
        
      <div className="invest-container container">
        <div className="top-invest">
          <div className="head-invest">
            <div className="in-line">
              <div className="line-in"></div>
              <p>OUR FEATURES</p>
            </div>
            <h1>We Make Investing Easy</h1>
          </div>
          <Button variant="primary" className="btn-top-invest">
            Feature
          </Button>
        </div>

        <div className="mrcards">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 my-3">
                <div className="card">
                  <img src={img1} />
                  <div className="card-body mrcol">
                    <h5 className="card-title ">Get Founded</h5>
                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eos officiis eligendi earum modi ab blanditii
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="card mrcard">
                  <img src={img2} />
                  <div className="card-body mrcol">
                    <h5 className="card-title">Safety Garanted</h5>
                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eos officiis eligendi earum modi ab blanditiis
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="card">
                  <img src={img3} />
                  <div className="card-body mrcol">
                    <h5 className="card-title">Most Money Raised</h5>
                    <p className="card-text">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eos officiis eligendi earum modi ab blanditiis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
