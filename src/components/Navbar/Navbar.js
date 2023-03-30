import React from 'react'
import logo from "../../assets/images/back-logo.png"
import "./navbar.css"
import { FaLock } from 'react-icons/fa';

function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-dark navbar-expand-lg bg-dark py-3">
                <div className="container myNav">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" style={{ width: '13rem', height: '2.8rem' }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mrcollapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ms-4 myMenu">
                            <li className="nav-item dropdown">
                                <a className="nav-link active" href="#" role="button" aria-expanded="false">
                                    {/* data-bs-toggle="dropdown" */}
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">ABOUT</a>
                            </li>
                            
                            <li className="nav-item dropdown">
                            
                                <a className="nav-link active" href="#" role="button" aria-expanded="false">
                                    PRODUCT
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active" href="#" role="button" aria-expanded="false">
                                    BLOG
                                </a>
                            </li>
                            <li className="nav-item nav-item-last">
                                <a className="nav-link active" href="#">CONTACTS</a>
                            </li>
                        </ul>
                        <div className="mrbtn">
                            <button className='btn btn-success mybtnsc'>START CAMPAIGN</button>
                            <button className="btn btn-primary mybtn"><FaLock/></button>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar