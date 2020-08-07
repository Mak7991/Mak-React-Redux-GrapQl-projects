import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function SubFooter() {
    return (
        <div className="sub-footer">
            <Container>
                <Row>
                    <Col lg={4} md={4} xs={6}>
                       <h1>Siayara</h1>
                        <ul>
                            <li>
                                <Link to="/">About Us</Link>
                            </li>
                            <li>
                                <Link to="/terms-and-conditions">Terms</Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy">Privacy</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4} md={4} xs={6}>
                        <h1>Explore</h1>
                        <ul>
                            <li>
                                <Link to="/pilot">Drive with Siayara</Link>
                            </li>
                            <li>
                                <Link to="/passenger">Ride with Siayara</Link>
                            </li>
                            <li>
                                <Link to="/">Safety</Link>
                            </li>
                            {/* <li>
                                <Link to="/">Blogs</Link>
                            </li> */}
                        </ul>
                    </Col>
                    <Col lg={4} md={4} xs={12}>
                        <div className="logo-with-links">
                            <Link to="https://www.google.com">
                                <Image className="logo" src={require('../../assets/images/sub-footer-logo.png')} draggable={false}/>
                            </Link>

                            <div className="app-links">
                                <a href="https://play.google.com/store/apps/details?id=com.siayara_rider&hl=en"><Image className="app-links-image" src={require('../../assets/images/play-store.png')} draggable={false}/></a>  
                                <a href="https://apps.apple.com/pk/app/siayara/id1479181568"><Image className="app-links-image" src={require('../../assets/images/app-store.png')} draggable={false}/></a>
                            </div> 

                        </div>
                    </Col>
                </Row> 
            </Container>
        </div>
    );
}

export default SubFooter;