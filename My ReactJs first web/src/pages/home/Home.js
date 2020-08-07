import React from 'react';
import './Home.scss';
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HeaderSection, AnimatedMap, VehicleOptions } from "../../uiComponents";

function Home() {
    return (
        <div className="home">
            <HeaderSection
                upperTitle="Welcome To"
                title="SIAYARA"
                paragraph="Siayara is one of the leading car-hailing services in Pakistan <br/> aiming to build trust
                           by providing transparency and hassle <br/> free service to Passengers and Pilots."
                downArrowShow={true}
            />
            <section className="intro-section">
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <li>
                                    <Link to="/">Drive with Siayara</Link>
                                </li>
                                <li/>
                                <li>
                                    <Link to="/">Ride with Siayara</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="video-container"></div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="gradient-layer">

                <section className="text-with-paragraph-container">
                    <Container>
                        <div className="text-with-paragraph">
                            <div className="text-with-paragraph-left">
                                <h4>DRIVE WITH SIAYARA</h4>
                                <h1>BE YOUR <br/> OWN BOSS</h1>
                            </div>
                            <div className="text-with-paragraph-right">
                                <p>
                                    The team has worked day and night to come up with a solution which cares more about
                                    Pilots. Siayara provides reliable and resourceful mode of earning
                                    for the citizen of Pakistan.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="how-is-better-section">
                    <Container fluid>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <Row>
                                    <Image className="how-is-better-section-image" src={require('../../assets/images/how-is-better.png')} draggable={false}/>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <div className="how-is-better-section-content">
                                    <h1>How is Siayara Better?</h1>
                                    <p>
                                        The team has worked day and night to come up with a solution which cares more
                                        about Pilots. Siayara provides reliable and resourceful mode of earning for
                                        the citizen of Pakistan and we believe in making a difference to the society.
                                    </p>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </section>

                <VehicleOptions/>

                <section className="text-with-paragraph-container">
                    <Container>
                        <div className="text-with-paragraph">
                            <div className="text-with-paragraph-left">
                                <h4>Ride with Siayara</h4>
                                <h1>We Care <br/> About You</h1>
                            </div>
                            <div className="text-with-paragraph-right">
                                <p>
                                    At Siayara, we care about our Passengers. We want them to have a great
                                    experience with minimal trouble in setting up and finding a ride.
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="your-safety-section">
                    <Container fluid>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <div className="your-safety-section-content">
                                    <h1>Your Safety is Our Priority</h1>
                                    <ul>
                                        <li>
                                            <Image src={require('../../assets/images/presentation.png')} draggable={false}/>
                                            <div className="list-item-content">
                                                <h1>Training</h1>
                                                <p> Just to make sure every passenger travelling with Siayara is safe
                                                    and sound, every driver undergo a thorough screening process and
                                                    receive safety and security training. </p>
                                            </div>
                                        </li>
                                        <li>
                                            <Image src={require('../../assets/images/customer-service.png')} draggable={false}/>
                                            <div className="list-item-content">
                                                <h1>Help</h1>
                                                <p> Siayara provide 24/7 call support for all our passengers,
                                                    to make sure every issue faced is dealt with core attention.
                                                    Passengers can also reach us via our application. </p>
                                            </div>
                                        </li>
                                        <li>
                                            <Image src={require('../../assets/images/shield.png')} draggable={false}/>
                                            <div className="list-item-content">
                                                <h1>Security</h1>
                                                <p> Our team of dedicated safety and security ensures
                                                    you have an amazing journey and experience. </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <Row>
                                    <Image className="your-safety-section-image" src={require('../../assets/images/your-safety.png')} draggable={false}/>
                                </Row>
                            </Col>
                        </Row>

                    </Container>
                </section>

            </section>

            <AnimatedMap />

            <section className="business-section">
                <Container>
                    <Row>
                        <Col>
                            <Image className="mobile-image" src={require('../../assets/images/mobile-image.png')} draggable={false}/>
                        </Col>
                        <Col lg="5">
                            <div className="business-section-content">
                                <h1> Best in <br/> business </h1>
                                <p>
                                    Transparency is our key factor, which means no hidden charges of any type.
                                    Lower fare rates to attract more passengers. Siayara provides 24/7 support
                                    to pilots to deal with any circumstances they face at any time of the day.
                                    Last but not the least we follow our motive which says WE CARE ABOUT YOU.
                                </p>
                                <div className="app-links">
                                    <Link to="/">
                                        <Image className="app-links-image" src={require('../../assets/images/play-store.png')} draggable={false}/>
                                    </Link>
                                    <Link to="/">
                                        <Image className="app-links-image" src={require('../../assets/images/app-store.png')} draggable={false}/>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </div>
    );
}

export default Home;
