import React, {Component} from 'react';
import './Pilot.scss';
import {HeaderSection, VehicleOptions, AnimatedMap, ContactUs} from "../../uiComponents";
import {Container, Row,Col} from 'react-bootstrap'
import GoogleMapReact from 'google-map-react';
import {franchises} from "../../assets/dummy-data/Franchise";
import pin from '../../assets/images/pin.png';
import phoneImage from '../../assets/images/phone.png';
import MarkerImage from '../../assets/images/small-marker.png'
// import Iframe from 'react-iframe';


const infoWindow = ({name, address, phone, url}) => {
    
    let tel = `tel:${phone}`;
    return `<div class="info-window">
            <div class="info-window-text-with-label">
                <label>Name : </label>
                <h1>${name}</h1>
            </div>
            <div class="info-window-text-with-label">
                <label>Address : </label>
                 <p>${address}</p>
            </div>
           <div class="info-window-text-with-label">
                <label>Phone : </label>
                <p>${phone}</p>
            </div>
            <div class="info-window-text-with-label">
               <label>Others : </label>
               <div class="links">
                    <a href="${tel}"> 
                        <Image src="${phoneImage}"/> 
                    </a>
                    <a href='${url}' target="_blank"> 
                        <Image src="${pin}"/>
                    </a>
                </div>
            </div>
        </div>`

};

class Pilot extends Component {

    constructor(props) {
        super(props);
        this.map = null;
        this.maps = null;
        this.infowindow = null;
    }

    // Return map bounds based on list of places
    getMapBounds = (map, maps, places) => {
        const bounds = new maps.LatLngBounds();
        if (places) {
            places.forEach(({coordinate}) => coordinate && bounds.extend(new maps.LatLng(coordinate.lat, coordinate.lng)));
        }
        return bounds;
    };
    // Re-center map when resizing the window
    bindResizeListener = (map, maps, bounds) => {
        maps.event.addDomListenerOnce(map, 'idle', () => {
            maps.event.addDomListener(window, 'resize', () => map.fitBounds(bounds));
        });
    };
    // Fit map to its bounds after the api is loaded

    callback = (places) => {
        for (let i = 0; i < places.length; i++) {
            this.renderMarkers(places[i], i);
        }
    };

    infoWindow = (place, marker) => {
        this.infowindow.setContent(infoWindow(place));
        this.infowindow.open(this.map, marker);
    }

    renderMarkers = (place, i) => {
        let {coordinate, name} = place;
        console.log('this.maps.Marker', this.maps.Marker)
        let marker = new this.maps.Marker({
            position: coordinate,
            map: this.map,
            icon: MarkerImage,
            title: name
        });
        if(i === 0){
            this.infoWindow(place, marker)
        }
        marker.addListener('click', () => {
            this.infoWindow(place, marker)
        });
    };
    onGoogleApiLoaded = (map, maps, places) => {
        this.map = map;
        this.maps = maps;
        this.infowindow = new maps.InfoWindow();
        // Get bounds by our places
        const bounds = this.getMapBounds(map, maps, places);
        // Fit map to bounds
        map.fitBounds(bounds);
        // Bind the resize listener
        this.bindResizeListener(map, maps, bounds);
        this.callback(places);
    };



render(){
    return (
        <div className="pilot">
            <HeaderSection
                style="pilot-page-header"
                upperTitle="drive with siayara"
                title="be your own boss"
                downArrowShow={true}
            />
            <section className="pilot-text">
                <Container>
                        <p>
                            Siayara is one of the leading cars hailing 
                            service in Pakistan with a mission of providing trustworthy, 
                            hassle free and transparent mode of earning to all the Pilots.
                        </p>
                </Container>
            </section>
            <section className="pilot-intro">
                <Container>
                    <Row>
                        <Col>
                             <div className="pilot-app-intro"></div>  
                             {/* <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                            // width="450px"
                            // height="450px"
                            // id="myId"
                            className="pilot-app-intro"
                            display="initial"
                            position="relative"/>   */}
                        </Col>
                    </Row>  
                </Container>
            </section>
            <section className="betterment">
                <Container>
                        <Row>
                            <Col>
                                <ul>
                                <li>
                                    <h1>How is Siayara Better?</h1>   
                                </li>
                                <li/>
                                <li>
                                    <p>
                                        The team has worked day and night to come up with a solution which cares more about Pilots.
                                        Siayara provides reliable and resourceful mode of earning for the citizen of Pakistan and
                                        we believe in making a difference to the society.
                                    </p>  
                                </li>
                            </ul>
                            </Col>
                        </Row>
                    <div className="betterment-cover"></div>
                </Container>
            </section>
            <section className="condition-and-rules">
                <Container>
                 <Row>  
                     <Col>
                            <h6>Car Condition:</h6>
                            <p>
                                Before starting your day, follow  few measures to make sure you and the following passengers are safe when they travel with you.
                                <br></br>
                                <br></br>
                                Please check the following:
                            </p>
                            <ul>
                                <li>Oil</li>
                                <li>Tire Pressure</li>
                                <li>Brakes</li>
                                <li>Alignment</li>
                                <li>Air Filter</li>
                                <li>Transmission Fluid</li>
                                <li>Light, All of them</li>
                            </ul>
                    </Col>
                    <Col className="rules">
                        <h6>Traffic Rules:</h6>
                            <p>
                                Some of the basic rules that are to be followed while driving in Pakistan.
                                <br></br>
                                <br></br>
                                Please follow the rules:
                            </p>
                            <ul>
                                <li>Obey traffic rules</li>
                                <li>Seatbelt is mandatory</li>
                                <li>Minimum 18 years</li>
                                <li>No drugs or alcohol while driving</li>
                                <li>Use of high beam light is illegal</li>
                                <li>Always give signal before changing lane</li>
                                <li>Left hand driving </li>
                            </ul>
                    </Col>
                  </Row>
                </Container>    
            </section>
            <section className="pilot-vehicle-category">
                <VehicleOptions/>
            </section>
            <AnimatedMap/>
            <section className="pilot-map">
                <div style={{height: '60vh', width: '100%'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: 'AIzaSyAkvHz_wyuSb920YsgjvR-Qyse1N2nCyTw'
                        }}
                        defaultCenter={{
                            lat: 24.8607,
                            lng: 67.0011
                        }}
                        defaultZoom={15}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({map, maps}) => this.onGoogleApiLoaded(map, maps, franchises)}/>
                </div>
            </section>
            <ContactUs />
        </div>
    );
}
}

export default Pilot;
