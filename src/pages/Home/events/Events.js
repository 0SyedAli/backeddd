import React from 'react'
import './events.css'
import Button from 'react-bootstrap/Button';

const Events = () => {
    return (
        <div>
            <section className="event-area pos-relative event-bg pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-9 col-lg-8">
                            <div className="section-title top-Event white-text mb-65">
                                <div className="pr-line ">
                                    <div className="line-pr"></div>
                                    <p>POPULAR CAUSES</p>
                                </div>
                                <h1 className="er-head">Upcoming Events</h1>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 d-none d-xl-block">
                            <Button variant="primary" className="btn-Event">HOW WORK</Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="basic-tab">
                                <ul className='main-ul'>
                                    <li><a href="/">Day 01</a></li>
                                    <li><a href="/">Day 02</a></li>
                                    <li><a href="/">Day 03</a></li>
                                </ul>
                                <div className="tab-content" id="emyTabContent">
                                    <div className="tab-pane fade " id="homee" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="event-wrapper mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon1.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>9.30 - 10.30 AM</h4>
                                                            <span>Start program</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">Fundrising Base Communation</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: Legend D. Jank,</span>
                                                            <span>Vanue: New York, USA</span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn">
                                                        <a href="#" className="btn-circle">join today</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-wrapper mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon2.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>10.30 - 1.30 PM</h4>
                                                            <span>Communication</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">How Create A Global Connection</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: Legend D. Jank,</span>
                                                            <span>Vanue: New York, USA</span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn">
                                                        <a href="#" className="btn-circle">join today</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-wrapper mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon3.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>2.30 - 10.30 AM</h4>
                                                            <span>Launch break</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">Launch Break</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: <span>Legend D. Jank, Romada Food</span></span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn pr-50">
                                                        <img src="assets/img/event/icon/lunch.png" alt='/' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-wrapper mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon4.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>4.30 - 10.30 PM</h4>
                                                            <span>Development</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">UX Research &amp; Development</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: Legend D. Jank,</span>
                                                            <span>Vanue: New York, USA</span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn">
                                                        <a href="#" className="btn-circle">join today</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="profilee" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="event-wrapper main-sec mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon1.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>10.30 - 10.30 AM</h4>
                                                            <span>Start program</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">Fundrising Base Communation</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: Legend D. Jank,</span>
                                                            <span>Vanue: New York, USA</span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                            et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn">
                                                        <a href="#" className="btn-circle">join today</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-wrapper main-sec mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon2.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>12.30 - 1.30 PM</h4>
                                                            <span>Communication</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">Most Money Raised Become.</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: Legend D. Jank,</span>
                                                            <span>Vanue: New York, USA</span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                            et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn">
                                                        <a href="#" className="btn-circle">join today</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-wrapper main-sec mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon4.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>3.30 - 10.30 PM</h4>
                                                            <span>Development</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">UX Research &amp; Development</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: Legend D. Jank,</span>
                                                            <span>Vanue: New York, USA</span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                            et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn">
                                                        <a href="#" className="btn-circle">join today</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-wrapper main-sec mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon3.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>8.30 - 10.30 PM</h4>
                                                            <span>Launch break</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">Dinner Break</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: <span>Legend D. Jank, Romada Food</span></span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                            et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex event-img align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn-img pr-50">
                                                        <img src="assets/img/event/icon/lunch.png" alt='/' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="contacte" role="tabpanel" aria-labelledby="contact-tab">
                                        <div className="event-wrapper mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon1.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>9.30 - 10.30 AM</h4>
                                                            <span>Start program</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">Fundrising Base Communation</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: Legend D. Jank,</span>
                                                            <span>Vanue: New York, USA</span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                            et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn">
                                                        <a href="#" className="btn-circle">join today</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-wrapper mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon3.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>1.30 - 10.30 PM</h4>
                                                            <span>Launch break</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">Launch Break</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: <span>Legend D. Jank, Romada Food</span></span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                            et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn pr-50">
                                                        <img src="assets/img/event/icon/lunch.png" alt='/' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-wrapper mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon2.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>4.30 - 1.30 PM</h4>
                                                            <span>Communication</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">How Create A Global Connection</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: Legend D. Jank,</span>
                                                            <span>Vanue: New York, USA</span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                            et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn">
                                                        <a href="#" className="btn-circle">join today</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-wrapper mb-40">
                                            <div className="row">
                                                <div className="col-lg-3 d-flex align-items-center">
                                                    <div className="event-time">
                                                        <div className="event-icon mb-20">
                                                            <img src="assets/img/event/icon/event-icon4.png" alt='/' />
                                                        </div>
                                                        <div className="event-time-text">
                                                            <h4>7.30 - 10.30 PM</h4>
                                                            <span>Development</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 d-flex align-items-center ">
                                                    <div className="event-info">
                                                        <h3><a href="#">UX Research &amp; Development</a></h3>
                                                        <div className="event-meta mb-15">
                                                            <span>Speaker: Legend D. Jank,</span>
                                                            <span>Vanue: New York, USA</span>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                                            et dolore magna
                                                            aliqua.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 d-flex align-items-center justify-content-start justify-content-lg-end">
                                                    <div className="event-btn">
                                                        <a href="#" className="btn-circle">join today</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Events