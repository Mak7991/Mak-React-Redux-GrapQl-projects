import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const SubNav = () => {
  return (
    <Menu mode="horizontal" className="leftMenu">
      <Menu.Item key="mail">
        <Link to="/GoalPanel">Home</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="/performance">Performance</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="/activity">Activity</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="/managetransfer">Manage Transfer</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="/documents">Documents</Link>
      </Menu.Item>
      <Menu.Item key="">
        <Link to="/settings">Setting</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SubNav;
