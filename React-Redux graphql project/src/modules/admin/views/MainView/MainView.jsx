import React, { Component } from "react";
import VerticalNavbar from "components/shared/VerticalNavbar/VerticalNavbar";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminAnalytics from "components/AdminAnalytics/AdminAnalytics";
import AdminStudents from "components/AdminStudents/AdminStudents";
import AdminTeachers from "components/AdminTeachers/AdminTeachers";
import AdminClassrooms from "components/AdminClassrooms/AdminClassrooms";

import "./MainView.scss";

class MainView extends Component {
  render() {
    return (
      <div className="main-view-wrapper">
        <div className="main-view">
          <div className="main-view-left-side">
            <VerticalNavbar />
          </div>
          <div className="main-view-right-side">
            <Switch>
              <Route exact path="/admin" component={() => <Redirect to="/admin/analytics" />} />
              <Route path="/admin/analytics" component={AdminAnalytics} />
              <Route path="/admin/students" component={AdminStudents} />
              <Route path="/admin/teachers" component={AdminTeachers} />
              <Route path="/admin/classrooms" component={AdminClassrooms} />
              <Route component={() => <Redirect to="/admin/analytics" />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default MainView;
