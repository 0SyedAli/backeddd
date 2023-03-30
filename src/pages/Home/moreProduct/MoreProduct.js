import React from 'react'
import './moreProduct.css'
import Button from 'react-bootstrap/Button';

const MoreProduct = () => {
    return (
        <div>
            <div className="container mrMore">
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

                {/* <ul className="nav theme-bg text-center mb-75" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">design</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">art</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">craft</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab1" data-toggle="tab" href="#contact1" role="tab" aria-controls="contact" aria-selected="false">tech</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab2" data-toggle="tab" href="#contact2" role="tab" aria-controls="contact" aria-selected="false">music</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab3" data-toggle="tab" href="#contact3" role="tab" aria-controls="contact" aria-selected="false">photography</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab4" data-toggle="tab" href="#contact4" role="tab" aria-controls="contact" aria-selected="false">film</a>
                    </li>
                </ul> */}

                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="causes white-bg mb-30">
                            <div className="causes__img">
                                <img src="assets/img/causes/causes1.jpg" alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">
                                <a href="#" className="movie-title">WATCHBOX</a>
                                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos officiis eligendi earum modi ab blanditii MX App: </h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <span>Pledged</span>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <h2>$33,467</h2>
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
                                <img src="assets/img/causes/causes3.jpg" alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">
                                <a href="#" className="movie-title">WATCHBOX</a>

                                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos officiis eligendi earum modi ab blanditii MX App: </h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <span>Pledged</span>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <h2>$33,467</h2>
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
                                <img src="assets/img/causes/causes4.jpg" alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">
                                <a href="#" className="movie-title">WATCHBOX</a>

                                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos officiis eligendi earum modi ab blanditii MX App: </h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <span>Pledged</span>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <h2>$33,467</h2>
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
                                <img src="assets/img/causes/causes5.jpg" alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">
                                <a href="#" className="movie-title">WATCHBOX</a>

                                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos officiis eligendi earum modi ab blanditii MX App: </h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <span>Pledged</span>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <h2>$33,467</h2>
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
                                <img src="assets/img/causes/causes6.jpg" alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">
                                <a href="#" className="movie-title">WATCHBOX</a>

                                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos officiis eligendi earum modi ab blanditii</h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <span>Pledged</span>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <h2>$33,467</h2>
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
                                <img src="assets/img/causes/causes2.jpg" alt='/' />
                                <div className="causes-heart">
                                    <a href="#"><i className="far fa-heart" /></a>
                                </div>
                            </div>
                            <div className="causes__caption">
                                <a href="#" className="movie-title">WATCHBOX</a>

                                <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos officiis eligendi earum modi ab blanditii MX App: </h4>
                                <div className="causes-progress mb-25">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <div className="causes-count mt-15 fix">
                                        <div className="count-number f-left text-left">
                                            <h2>$32,678</h2>
                                            <span>Pledged</span>
                                        </div>
                                        <div className="count-number f-right text-right">
                                            <h2>$33,467</h2>
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
                </div>
            </div>
        </div>
    )
}

export default MoreProduct