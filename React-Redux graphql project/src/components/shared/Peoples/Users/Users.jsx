import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "components/shared/Peoples/Users/Users.scss";
const Users = props => {
  return (
    <div className="users">
      <div className="user-avatar">
        <Avatar shape="square" size={45} icon={<UserOutlined />} src={props.img} alt="pic" />
      </div>
      <div className="user-text">
        <h2 className="user-name">{props.name}</h2>
      </div>
    </div>
  );
};

export default Users;
