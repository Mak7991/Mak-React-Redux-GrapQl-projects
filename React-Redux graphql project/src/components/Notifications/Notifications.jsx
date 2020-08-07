import React from "react";
import { Avatar, Alert } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "components/Notifications/Notifications.scss";
const notification = (props) => {
  return (
    <div className="notification-box notify-success">
      <div className="notification-text-area">
        <div className="notification-text-icon">
          <Avatar shape="square" icon={<UserOutlined />} size={40} />
        </div>
        <div className="notification-text">
          <div className="notification-text-detial">
            <h4>Muhammad Salman Asif</h4>
            <p>Today Class timing is 9:00am</p>
            <span>42m ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default notification;
