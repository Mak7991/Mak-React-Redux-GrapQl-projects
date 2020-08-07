import React, {Component} from "react";
import GoogleMapReact from 'google-map-react';
import {franchises} from "../../assets/dummy-data/Franchise";
import pin from '../../assets/images/pin.png';
import phoneImage from '../../assets/images/phone.png';
import MarkerImage from '../../assets/images/small-marker.png';
import {ContactUs, HeaderSection} from '../../uiComponents'


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


class ContactForm extends Component{
    
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
        return(
            <div className="contact-us">
                <HeaderSection
                    title="Contact Us"
                    className="single-page-header-section"
                />
                    <section>
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
                <ContactUs/>
            </div>
        )
    }
}

export default ContactForm;