import React, { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import Login from "components/Login/Login";
import ForgotPassword from "components/ForgotPassword/ForgotPassword";
import SetPassword from "components/SetPassword/SetPassword";
import NotFound from "components/shared/NotFound/NotFound";
import Header from "components/shared/Header/Header";

class AuthContainer extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path={`${this.props.match.url}/login`} exact component={Login} />
          <Route
            path={`${this.props.match.url}/forgot-password`}
            exact
            component={ForgotPassword}
          />
          <Route path={`${this.props.match.url}/set-password`} exact component={SetPassword} />
          <Route
            path={this.props.match.url}
            exact
            component={() => <Redirect to={`${this.props.match.url}/login`} />}
          />
          <Route component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default AuthContainer;
