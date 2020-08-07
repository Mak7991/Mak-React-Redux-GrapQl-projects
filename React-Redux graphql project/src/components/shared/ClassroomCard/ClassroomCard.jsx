import React from "react";
import { Card, Avatar } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
//styles
import "./ClassroomCard.scss";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

function ClassroomCard(props) {
  const { name, teacher, coverPhoto, id } = props.data;
  return (
    <div className="classroom-card">
      <Card hoverable cover={<img alt="" src={coverPhoto?.secureUrl} className="classroom-img" />}>
        {teacher && (
          <Meta
            title={<div className="teacher-name">{teacher.name}</div>}
            avatar={
              <div className="teacher-avatar">
                <Avatar size={100} src={teacher.photo?.secureUrl} icon={<UserOutlined />} />
              </div>
            }
          />
        )}
        <div className="card-child">
          <NavLink to={`${id}/feed`}>
            <h1>{name}</h1>
          </NavLink>
        </div>
      </Card>
    </div>
  );
}

export default ClassroomCard;
