import React from 'react'
import './news.css'
import img1 from '../../../assets/images/8322fe88218111b81b9543a77b614fd6.jpg'
import Button from 'react-bootstrap/Button';

const News = () => {
    return (
        <div>
            <div className="container mrNews">
                <div className="mrRow">
                    <div className="section-title">
                        <div className="pr-line">
                            <div className="line-pr"></div>
                            <p>POPULAR CAUSES</p>
                        </div>
                        <h1>Backix makes it easier</h1>
                    </div>

                    <div className="section-button">
                        <Button variant="primary" className="btn-how btn-More">HOW WORK</Button>
                    </div>
                </div>
                <div className="mrcards">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 my-3">
                                <div className="card">
                                    <img src={img1} />
                                    <div className="card-body mrcol">
                                        <h5 className="card-title ">Get Founded</h5>
                                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos officiis eligendi earum modi ab blanditii</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="card mrcard">
                                    <img src={img1} />
                                    <div className="card-body mrcol">
                                        <h5 className="card-title">Safety Garanted</h5>
                                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos officiis eligendi earum modi ab blanditiis</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 my-3">
                                <div className="card">
                                    <img src={img1} />
                                    <div className="card-body mrcol">
                                        <h5 className="card-title">Most Money Raised</h5>
                                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos officiis eligendi earum modi ab blanditiis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News