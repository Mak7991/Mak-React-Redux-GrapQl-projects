import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, matchPath } from "react-router-dom";
import Header from "components/shared/Header/Header";
import { getNotification } from "redux/actions/notificationActions";
class StudentHeaderContainer extends PureComponent {
  state = {
    sideLinks: [
      {
        title: "Profile",
        link: `/studentProfile`,
      },
      {
        title: "Setting",
        link: `/studentProfileEdit`,
      },
    ],
    notAllowed: [
      {
        title: "home",
        location: "/",
      },
      {
        title: "home",
        location: "/studentProfileEdit",
      },
      {
        title: "home",
        location: "/studentProfile",
      },
    ],
  };
  static getDerivedStateFromProps(nextProps) {
    const match = matchPath(nextProps.location.pathname, {
      path: "/:classroomId/",
    });
    if (match && match.params.classroomId) {
      const classroomId = match.params.classroomId;
      return {
        headerLinks: [
          {
            title: "Feed",
            link: `/${classroomId}/feed`,
          },
          {
            title: "Classwork",
            link: `/${classroomId}/classwork`,
          },
          {
            title: "Messages",
            link: `/${classroomId}/messages`,
          },
          {
            title: "Peoples",
            link: `/${classroomId}/peoples`,
          },
        ],
        sideLinksId: [
          {
            title: "Profile",
            link: `/${classroomId}/studentProfile`,
          },
          {
            title: "Setting",
            link: `/${classroomId}/studentProfileEdit`,
          },
        ],
      };
    }
    return null;
  }
  getNotificationHandler = () => {
    this.props.getNotification();
  };
  render() {
    const { pathname } = this.props.location;
    let links = this.state.sideLinks;
    let headerLinks = [];
    let showNotificaton = true;

    if (this.state?.headerLinks) {
      for (let cur of this.state.headerLinks) {
        if (pathname === cur.link) {
          links = this.state.sideLinksId;
          break;
        } else {
          if (
            pathname === this.state.sideLinksId[0].link ||
            pathname === this.state.sideLinksId[1].link
          ) {
            links = this.state.sideLinksId;
            break;
          }

          links = this.state.sideLinks;
        }
      }
    }

    for (let cur of this.state.notAllowed) {
      if (pathname === cur.location) {
        headerLinks = [];
        showNotificaton = false;
        break;
      } else {
        headerLinks = this.state.headerLinks;
        showNotificaton = true;
      }
    }
    return (
      <Header
        showNotificaton={showNotificaton}
        links={links}
        protectedRoute={true}
        user={this.props.user}
        headerLinks={headerLinks}
        notification={this.props.notification}
        clicked={this.getNotificationHandler}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.login.user,
    notification: state.notify,
  };
};
const mapDispatchToProps = {
  getNotification,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentHeaderContainer));
