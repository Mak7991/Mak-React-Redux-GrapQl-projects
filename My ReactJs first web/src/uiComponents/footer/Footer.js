import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col xs={12}  md={6} lg={6}>
                        <p>Copyright © 2020 Siayara  . All rights reserved.</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/SiayaraPakistan/">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/SiayaraOfficial">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/siayara.pk">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;