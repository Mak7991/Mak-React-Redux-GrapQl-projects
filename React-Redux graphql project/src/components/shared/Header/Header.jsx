import React, { Component } from "react";
import { Menu, Avatar, Popover, Button } from "antd";
import { withRouter, NavLink, Link, matchPath } from "react-router-dom";
import { connect } from "react-redux";
import Container from "components/shared/Container/Container";
import {
  LogoutOutlined,
  BellOutlined,
  LoadingOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "components/shared/Header/Header.scss";
import Loader from "components/shared/Loader/Loader";
import Notify from "components/Notifications/Notifications";
import NotifyError from "components/Notifications/NotifyError/NotifyError";
import Async from "components/shared/Async/Async";
class Header extends Component {
  state = {
    current: "feed",
    visible: false,
  };
  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState(preState => {
      return {
        visible: !preState.visible,
      };
    });
  };
  pageChangeHandler = () => {
    window.location.replace("/auth/login");
  };
  render() {
    const { protectedRoute, showNotificaton } = this.props;
    let async = null;
    if (this.props.notification) {
      const { uiState, error, notification } = this.props.notification;

      async = (
        <Async
          uiState={uiState}
          error={error}
          onSuccess={() => [2, 3, 5, 6].map((_, index) => <Notify key={index} />)}
          onFailure={error => <NotifyError error={error} />}
        />
      );
    }
    return (
      <div className="header">
        <Container>
          <div className="header-body">
            <div className="left-side-header">
              <Link to="/">
                <h1>AYMS</h1>
              </Link>
            </div>
            {protectedRoute && (
              <div className="right-side-header">
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal">
                  {this.props.headerLinks.map((link, index) => (
                    <Menu.Item key={index}>
                      <NavLink to={link.link}>
                        <span className="text-change">{link.title}</span>
                      </NavLink>
                    </Menu.Item>
                  ))}
                  {showNotificaton && (
                    <Menu.Item key="notification" className="bell-icon">
                      <Popover
                        placement="bottomRight"
                        title="Notifications"
                        content={<div style={{ position: "relative" }}>{async}</div>}
                        trigger="click"
                        arrowPointAtCenter>
                        <BellOutlined style={{ fontSize: "18px" }} onClick={this.props.clicked} />
                      </Popover>
                    </Menu.Item>
                  )}
                  <Menu.Item className="profile-link">
                    <Popover
                      placement="bottomRight"
                      arrowPointAtCenter
                      content={
                        <div className="popover-menu">
                          <Link to={this.props.links[0].link} style={{ color: "black" }}>
                            <div className="popover-item">
                              <div className="popover-icon">
                                <Avatar
                                  size="small"
                                  icon={<UserOutlined />}
                                  src={this.props.user?.photo?.secureUrl}
                                />
                              </div>
                              <div className="popover-name">
                                <span>{this.props.user.name}</span>
                                <span>{this.props.user.role}</span>
                              </div>
                            </div>
                          </Link>
                          <Link style={{ color: "black" }} to={this.props.links[1].link}>
                            <div className="popover-item">
                              <div className="popover-icon">
                                <SettingOutlined />
                              </div>
                              <div className="popover-name custom-margin-left">
                                <span>Setting</span>
                              </div>
                            </div>
                          </Link>
                          <div className="popover-item">
                            <div className="popover-icon">
                              <LogoutOutlined />
                            </div>
                            <div
                              className="popover-name custom-margin-left"
                              onClick={this.pageChangeHandler}>
                              <span>Logout</span>
                            </div>
                          </div>
                        </div>
                      }
                      trigger="click"
                      visible={this.state.visible}
                      onVisibleChange={() => this.handleVisibleChange(this.state.visible)}>
                      <Avatar icon={<UserOutlined />} src={this.props.user?.photo?.secureUrl} />
                    </Popover>
                  </Menu.Item>
                </Menu>
              </div>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Header);

Header.defaultProps = {
  showNotificaton: true,
};
