import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Image } from "react-bootstrap";

function Header() {
    const [toggleState, setToggleState] = useState("");

    function toggle() {
        setToggleState(toggleState === "change" ? "" : "change");
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="header">
            <Container >
                <Navbar.Brand>
                    <Link to="/">
                        <Image className="logo" src={require('../../assets/images/logo.png')} draggable={false}/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <span className={`switch ${toggleState} menu`} onClick={toggle}>
                        <div className="bar1" />
                        <div className="bar2" />
                        <div className="bar3" />
                    </span>
                </Navbar.Toggle>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto center-nav">
                        <Link to="/pilot" className="active">Pilot</Link>
                        <Link to="/passenger">Passenger</Link>
                    </Nav>
                    <Nav className="right-nav">
                        <Link to="/franchises">Franchises</Link>
                        <Link to="/career">
                            <span>
                                We’re hiring!
                                <span className="heartBeat animated infinite i">
                                    ❤️
                                </span>
                            </span>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
