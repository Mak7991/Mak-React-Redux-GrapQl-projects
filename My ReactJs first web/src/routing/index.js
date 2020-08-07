import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
    Login,
    SingUp,

    Home,
    Passenger,
    Pilot,
    TermsAndConditions,
    PrivacyPolicy,
    Career,
    Job,
    Franchises,
    ContactForm,

    NotFound
} from '../pages';

function Routing() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/sign-up" component={SingUp}/>
                <Route path="/passenger" component={Passenger}/>
                <Route path="/pilot" component={Pilot}/>
                <Route path="/career/:slug" component={Job}/>
                <Route path="/career" component={Career}/>
                <Route path="/franchises" component={Franchises}/>
                <Route path="/terms-and-conditions" component={TermsAndConditions}/>
                <Route path="/privacy-policy" component={PrivacyPolicy}/>
                <Route path="/contact-us" component={ContactForm}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    )
}

export default Routing;