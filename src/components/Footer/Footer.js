import React from 'react'
import './footer.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaYoutube } from 'react-icons/fa';
import logo from "../../assets/images/back-logo.png"

const Footer = () => {
    return (
        <div>
            <footer className='footer-main' data-background="assets/img/bg/footer-bg-3.jpg" style={{ backgroundImage: 'url("assets/img/bg/footer-bg-3.jpg")' }}>
                <div className="footer-area footer-3 pb-60 pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-row">
                                <div className="footer-widget mb-40">
                                    <div className="footer-logo mb-25">
                                        <img src={logo} alt />
                                    </div>
                                    <div className="social-icon mb-20">
                                        <a href="#"><FaFacebookF /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaLinkedinIn /></a>
                                        <a href="#"><FaBehance /></a>
                                        <a href="#"><FaYoutube /></a>
                                    </div>
                                    <address className="address-point">
                                        <span>London, UK</span>
                                        <p>13/A, Polar Garden City,
                                            London, UK</p>
                                        <a href="#">Find Us On Map</a>
                                    </address>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-row">
                                <div className="footer-widget mb-40">
                                    <h4 className="footer-title">Quicklinks</h4>
                                    <ul className="footer-link">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Project</a></li>
                                        <li><a href="#">Blogs</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Terms of Uses</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-row">
                                <div className="footer-widget mb-40">
                                    <h4 className="footer-title">Others</h4>
                                    <ul className="footer-link">
                                        <li><a href="#">Design &amp; Art</a></li>
                                        <li><a href="#">Crafts</a></li>
                                        <li><a href="#">Film &amp; Video</a></li>
                                        <li><a href="#">Food</a></li>
                                        <li><a href="#">Book</a></li>
                                        <li><a href="#">Games</a></li>
                                        <li><a href="#">Technology</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-row">
                                <div className="footer-widget mb-40">
                                    <h4 className="footer-title">Blogs</h4>
                                    <ul className="widget-latest-post">
                                        <li>
                                            <div className="widget-thumb">
                                                <a href="#"><img src="assets/img/blog/latest/post1.jpg" alt /></a>
                                            </div>
                                            <div className="widget-content">
                                                <h4><a href="#">Dolor sit amet, consectet is was
                                                    adipisicing.</a></h4>
                                                <span>12 June 2018</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="widget-thumb">
                                                <a href="#"><img src="assets/img/blog/latest/post2.jpg" alt /></a>
                                            </div>
                                            <div className="widget-content">
                                                <h4><a href="#">Dolor sit amet, consectet is was
                                                    adipisicing.</a></h4>
                                                <span>12 June 2018</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="widget-thumb">
                                                <a href="#"><img src="assets/img/blog/latest/post3.jpg" alt /></a>
                                            </div>
                                            <div className="widget-content">
                                                <h4><a href="#">Dolor sit amet, consectet is was
                                                    adipisicing.</a></h4>
                                                <span>12 June 2018</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="copyright-border pt-30 pb-30">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="right-text text-lg-left">
                                        <p>Copyright All Right Reserved By BasicTheme - 2019</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 ">
                                    <div className="social-icon-link text-center text-lg-right">
                                        <a href="#"><FaFacebookF /></a>
                                        <a href="#"><FaTwitter /></a>
                                        <a href="#"><FaLinkedinIn /></a>
                                        <a href="#"><FaBehance /></a>
                                        <a href="#"><FaYoutube /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
