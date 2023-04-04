import React from 'react'
import './news.css'
import imgCause1 from '../../../assets/images/8322fe88218111b81b9543a77b614fd6.jpg'
import imgCause2 from '../../../assets/images/8322fe88218111b81b9543a77b614fd6.jpg'
import imgCause3 from '../../../assets/images/8322fe88218111b81b9543a77b614fd6.jpg'
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
                {/* <div className="mrcards">
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
                </div> */}
                <div className="row mrNews-Row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img">
                                <img src={imgCause1} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption cap-news">
                                 
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                                {/* <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <h2>$33,467</h2>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <span>Pledged</span>
                                            <span>Target</span>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="line-card"></div>
                                <div className="causes-meta fix ">
                                    <span>BY ROMADA D</span>
                                    <span>AT LONDON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img">
                            <img src={imgCause2} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption cap-news">
                                 

                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                {/* <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <h2>$33,467</h2>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <span>Pledged</span>
                                            <span>Target</span>
                                        </div>
                                    </div>

                                </div> */}
                                <div className="line-card"></div>
                                <div className="causes-meta fix">
                                    <span>BY ROMADA D</span>
                                    <span>AT LONDON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img">
                            <img src={imgCause3} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption cap-news">
                                 

                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                                {/* <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <h2>$33,467</h2>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <span>Pledged</span>
                                            <span>Target</span>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="line-card"></div>
                                <div className="causes-meta fix">
                                    <span>BY ROMADA D</span>
                                    <span>AT LONDON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img">
                            <img src={imgCause4} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption cap-news">
                                 

                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <h2>$33,467</h2>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <span>Pledged</span>
                                            <span>Target</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="line-card"></div>
                                <div className="causes-meta fix">
                                    <span>BY ROMADA D</span>
                                    <span>AT LONDON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img">
                            <img src={imgCause5} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption cap-news">
                                 

                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <h2>$33,467</h2>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <span>Pledged</span>
                                            <span>Target</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="line-card"></div>
                                <div className="causes-meta fix">
                                    <span>BY ROMADA D</span>
                                    <span>AT LONDON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img">
                            <img src={imgCause6} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption cap-news">
                                 

                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <h2>$33,467</h2>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <span>Pledged</span>
                                            <span>Target</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="line-card"></div>
                                <div className="causes-meta fix">
                                    <span>BY ROMADA D</span>
                                    <span>AT LONDON</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default News