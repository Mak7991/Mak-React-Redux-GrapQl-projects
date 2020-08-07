import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "components/shared/Header/Header";
import { getNotification } from "redux/actions/notificationActions";
import { matchPath, withRouter } from "react-router-dom";
class TeacherHeaderContainer extends Component {
  constructor(props) {
    super(props);
    const match = matchPath(this.props.location.pathname, {
      path: "/:classroomId/",
    });
    this.state = {
      headerLinks: [
        {
          title: "Feed",
          link: `/${match?.params?.classroomId}/feed`,
        },
        {
          title: "Classwork",
          link: `/${match?.params?.classroomId}/classwork`,
        },
        {
          title: "Messages",
          link: `/${match?.params?.classroomId}/messages`,
        },
        {
          title: "Peoples",
          link: `/${match?.params?.classroomId}/peoples`,
        },
      ],
    };
  }
  getNotificationHandler = () => {
    this.props.getNotification();
  };
  render() {
    const headerLinks = this.props.location.pathname !== "/" ? this.state.headerLinks : [];
    const showNotificaton = this.props.location.pathname === "/" ? false : true;
    const links = ["/teacherProfile", "/teacherProfileEdit"];
    return (
      <Header
        links={links}
        protectedRoute={true}
        user={this.props.user}
        headerLinks={headerLinks}
        notification={this.props.notification}
        clicked={this.getNotificationHandler}
        showNotificaton={showNotificaton}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    notification: state.notify,
  };
};
const mapDispatchToProps = {
  getNotification,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeacherHeaderContainer));
