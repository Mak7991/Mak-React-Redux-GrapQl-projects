import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "components/shared/Header/Header";
import { getNotification } from "redux/actions/notificationActions";
class AdminHeaderContainer extends Component {
  getNotificationHandler = () => {
    this.props.getNotification();
  };
  render() {
    const navigateItem = ["feed", "classwork", "Messages"];
    return (
      <Header
        protectedRoute={true}
        user={this.props.user}
        navigateItem={navigateItem}
        notification={this.props.notification}
        clicked={this.getNotificationHandler}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login,
    user: state.login.user,
    notification: state.notify,
  };
};
const mapDispatchToProps = {
  getNotification,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminHeaderContainer);
