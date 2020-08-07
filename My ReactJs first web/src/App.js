import React, { useState } from 'react';
import Routing from './routing';
import {BrowserRouter} from "react-router-dom";
import {Header, SubFooter, Footer, GoToTop, Loading} from './uiComponents';
import ScrollToTop from "./utils/ScrollToTop";
import AOS from 'aos';

AOS.init();
function App() {

    const [loading, setLoading] = useState(false);

    // setTimeout(() => {
    //     setLoading(false)
    // }, 5000);

    return (
        <div className="App saiyara-theme">
            <Loading isVisible={loading}/>
            <BrowserRouter>
                <ScrollToTop> 
                    <Header/>
                    <Routing/>    
                    <SubFooter/>
                    <Footer/>
                </ScrollToTop>
                <GoToTop/>
            </BrowserRouter>
        </div>
    );
}

export default App;
