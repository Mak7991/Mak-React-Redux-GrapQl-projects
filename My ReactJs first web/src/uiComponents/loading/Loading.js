import React from 'react';
import './Loading.scss';
import {Image} from "react-bootstrap";

function Loading({isVisible = true}) {
    return (isVisible) ? <div className="loading-container">
        <div className="pin-point-with-pulse">
            <Image src={require('../../assets/images/marker.png')} className='pin'/>
            <div className='pulse'/>
        </div>
    </div> : null
}

export default Loading;
