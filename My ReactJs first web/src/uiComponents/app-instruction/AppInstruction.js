import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Slider from "react-slick";
import "./AppInstruction.scss";

const settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function AppInstruction() {
  return (
    <section className="app-instruction">
      <Container>
        <Row>
          <Col xs={12}>
            <h1>
              Let’s get you to <br /> your destination
            </h1>
          </Col>
          <Col />
        </Row>

        <Row>
          <Col>
            <Slider {...settings} className="app-instruction-slider">
              <div>
                <div className="app-slide">
                  <Col lg={12} className="app-slide-image">
                    <h2>Create An Account</h2>
                    <p>
                      You can sign-up for Siayara via Facebook or Google
                      account. You can also provide your Name, Number and Email
                      address to sign-up. A verification code would be sent to
                      you and you can enjoy the fun of travelling with Siayara.
                    </p>
                  </Col>
                </div>
              </div>
              <div>
                <div className="app-slide">
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <Row>
                      <Image
                        className="app-slide-image"
                        src={require("../../assets/images/Create-account.png")}
                        draggable={false}
                      />
                    </Row>
                  </Col>
                </div>
              </div>
              <div>
                <div className="app-slide">
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={6}>
                      <Row>
                        <Image
                          className="app-slide-image"
                          src={require("../../assets/images/select-location.png")}
                          draggable={false}
                        />
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="app-slide">
                  <Row>
                    <Col xs={12} sm={12} md={12} lg={6}>
                      <Row>
                        <Image
                          className="app-slide-image"
                          src={require("../../assets/images/Go-Siayara.png")}
                          draggable={false}
                        />
                      </Row>
                    </Col>
                  </Row>
                </div>
              </div>
              <div>
                <div className="app-slide">
                  <Col md={12}>
                    {/* <h2>Create An Account</h2>
                                        <p>You can sign-up for Siayara via Facebook or Google account.
                                            You can also provide your Name, Number and Email address to sign-up. 
                                            A verification code would be sent to you and you can enjoy the fun of travelling with Siayara.
                                        </p> */}
                  </Col>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppInstruction;
