import React from "react";
import {Link} from "react-router-dom"
import { Breadcrumb, Dropdown, Menu } from "antd";
import { MailOutlined, DownOutlined, PoweroffOutlined, MessageOutlined } from "@ant-design/icons";

const UserNav = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">robocapgoal@demo.com</Menu.Item>
      <Menu.Item key="2">
        <Link to="/feedback">
          <MessageOutlined style={{fontSize: "15px", color: "#888e98", padding:"10px"}} />
          Feedback
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/">
          <PoweroffOutlined style={{fontSize: "15px", color: "#888e98", padding:"10px"}} />
          Log out
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="">
        <MailOutlined style={{fontSize: "20px", color: "#888e98"}} />
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            robocap goal cl.. <DownOutlined style={{fontSize: "15px", color: "#888e98"}} />
          </a>
        </Dropdown>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default UserNav;
