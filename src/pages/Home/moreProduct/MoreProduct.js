import React from 'react'
import './moreProduct.css'
import Button from 'react-bootstrap/Button';
import imgCause1 from '../../../assets/images/Song 1.svg'
import imgCause2 from '../../../assets/images/2 1.svg'
import imgCause3 from '../../../assets/images/3 1.svg'
import imgCause4 from '../../../assets/images/4 1.svg'
import imgCause5 from '../../../assets/images/5 1.svg'
import imgCause6 from '../../../assets/images/Song 1.svg'
const MoreProduct = () => {
    return (
        <div>
            {/* <div className="mrMore"> */}
            <div className="container Popular" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
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
                <div className="NavMore">
                    <ul>
                        <li>BOOK</li>
                        <li>POP</li>
                        <li>HIPHOP</li>
                        <li>BLUES</li>
                        <li>JAZZ</li>
                        <li>CLASSIC</li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img">
                                <img src={imgCause1} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">

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
                                <img src={imgCause3} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">

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
                                <img src={imgCause4} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">

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
                                <img src={imgCause4} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">

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
                                <img src={imgCause5} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">

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
                                <img src={imgCause6} alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">

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
                                <div className="causes-meta fix ">
                                    <span>BY ROMADA D</span>
                                    <span>AT LONDON</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreProduct