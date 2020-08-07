import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./AnalyticsCard.scss";

function AnalyticsCard(props) {
  const { icon, title, value } = props;
  return (
    <div className="analytics-card-wrapper">
      <div className="analytics-card">
        <div className="analytics-card-icon">
          <Avatar size={70} icon={icon} style={{ background: "#1890ff" }} />
        </div>
        <div className="analytics-card-info">
          <h2>{title}</h2>
          <p>{value}</p>
        </div>
      </div>
    </div>
  );
}

AnalyticsCard.defaultProps = {
  icon: <UserOutlined />,
  title: "Title",
  value: 0,
};
export default AnalyticsCard;
