import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './invest.css'
import img1 from '../../../assets/images/sheadphone.png'
import img2 from '../../../assets/images/vr.png'
import img3 from '../../../assets/images/vr-3.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Invest = () => {
    return (
        <div>
            <div className='invest-container'>
                <div className='top-invest'>
                    <h1>We Make Investing Easy</h1>
                    <Button variant="primary" className="btn-top">Feature</Button>
                </div>
                {/* <div className="invest-cards">
                    <div className="invest-card">
                        <Card style={{
                            width: '20vw',
                            height: "50vw"
                        }}>
                            <Card.Img variant="top" src={img1} className="img-card" />
                            <Card.Body style={{
                                textAlign: 'center'
                            }}>
                                <Card.Title style={{
                                    color: 'darkblue',
                                    fontSize: "3vw"
                                }}>Card Title</Card.Title>
                                <Card.Text style={{
                                    fontSize: "2vw"
                                }}>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="invest-card">
                        <Card style={{
                            width: '18rem'
                        }}>
                            <Card.Img variant="top" src={img1} className="img-card" />
                            <Card.Body style={{
                                textAlign: 'center'
                            }}>
                                <Card.Title style={{
                                    color: 'darkblue'
                                }}>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="invest-card">
                        <Card style={{
                            width: '18rem'
                        }}>
                            <Card.Img variant="top" src={img1} className="img-card" />
                            <Card.Body style={{
                                textAlign: 'center'
                            }}>
                                <Card.Title style={{
                                    color: 'darkblue'
                                }}>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div> */}
                {/* <div className="invest-cards">
                    <div className="card" style={{width: '18rem'}}>
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Get Founded</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Safety Garanted</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Most Money Raised</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                </div> */}
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


                {/* <Row>
                    <Col md={6} lg={4}>
                        <Card style={{
                            width: '18rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: "none"
                        }}>
                            <Card.Img variant="top" src={img1} className="img-card" />
                            <Card.Body style={{
                                textAlign: 'center'
                            }}>
                                <Card.Title style={{
                                    color: 'darkblue'
                                }}>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card style={{
                            width: '18rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: "none"
                        }}>
                            
                            <Card.Img variant="top" src={img2} className="img-card" />
                            <Card.Body style={{
                                textAlign: 'center'
                            }}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card style={{
                            width: '18rem', display: 'flex', justifyContent: 'center', alignItems: 'center', border: "none"
                        }}>
                            <Card.Img variant="top" src={img3} className="img-card" />
                            <Card.Body style={{
                                textAlign: 'center'
                            }}>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}

            </div>
        </div >
    )
}

export default Invest