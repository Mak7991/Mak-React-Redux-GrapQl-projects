import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import './AnimatedMap.scss';
// import Lottie from 'react-lottie';
// import * as animationData from '../../assets/animation/map';

function AnimatedMap() {
    return (
        <section className="animated-map-section">
            <Container fluid>
                <Row>
                    <div className="map">
                        <Image className="map-image" src={require('../../assets/images/mapff_x264.gif')} draggable={false}/>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

// class AnimatedMap extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {isStopped: false, isPaused: false};
//     }
//
//     render() {
//         const buttonStyle = {
//             display: 'block',
//             margin: '10px auto'
//         };
//
//         const defaultOptions = {
//             loop: true,
//             autoplay: true,
//             animationData: animationData,
//             rendererSettings: {
//                 preserveAspectRatio: 'xMidYMid slice'
//             }
//         };
//
//         return <div>
//             <Lottie options={defaultOptions}
//                     height={400}
//                     width={400}
//                     isStopped={this.state.isStopped}
//                     isPaused={this.state.isPaused}/>
//             <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
//             <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
//             <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
//         </div>
//     }
// }

export default AnimatedMap;
