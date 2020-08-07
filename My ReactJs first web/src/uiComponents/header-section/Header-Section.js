import React, {useState} from 'react';
import './Header-Section.scss';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import background from '../../assets/images/header-background.png';

function HeaderSection({ upperTitle, title, paragraph, style = '', downArrowShow = false, }) {

    const [scrollDown, setScrollDown] = useState(null);

    function handleOnClick() {
        if(scrollDown && scrollDown.clientHeight) {
            window.scrollTo({
                top: scrollDown.clientHeight,
                behavior: 'smooth',
            });
        }
    }
    

    return (
    <section ref={ref => setScrollDown(ref) } className={`header-section ${style}`} >
        <Container>
            <div className="content" data-aos="fade-up" data-aos-duration="3500">
                {upperTitle ? <h6>{upperTitle}</h6> : null}
                {title ? <h1>{title}</h1> : null}
                {paragraph ? <p dangerouslySetInnerHTML={{ __html: paragraph }} /> : null}
            </div>
            {downArrowShow ? <div className="down-arrow">
                <Link to="#" className="down-arrow-button" onClick={handleOnClick}>
                    <span className="bounce animated infinite" /> 
                </Link>
            </div> : null}
            
        </Container>

    </section>
    );
}

export default HeaderSection;
