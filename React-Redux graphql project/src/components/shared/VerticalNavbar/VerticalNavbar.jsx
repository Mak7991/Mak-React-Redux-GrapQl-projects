import React from "react";
import { Menu } from "antd";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { NavLink, withRouter } from "react-router-dom";
import "./VerticalNavbar.scss";
const { SubMenu } = Menu;

function VerticalNavbar(props) {
  const { location } = props;
  return (
    <div className="vertical-navbar-wrapper">
      <div className="vertical-navbar">
        <Menu
          onClick={e => console.log(e)}
          style={{ width: 256 }}
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={["sub1"]}
          mode="inline">
          <SubMenu key="sub1" title="Dashboard">
            <Menu.Item key="/admin/analytics">
              <NavLink to="/admin/analytics">Analytics</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/students">
              <NavLink to="/admin/students">Students</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/teachers">
              <NavLink to="/admin/teachers">Teachers</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/superadmins">
              <NavLink to="/admin/superadmins">SuperAdmin</NavLink>
            </Menu.Item>
            <Menu.Item key="/admin/classrooms">
              <NavLink to="/admin/classrooms">Classrooms</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  );
}

export default withRouter(VerticalNavbar);
