import React from "react";
import "./StudentProfileClassView.scss";
import ClassroomCard from "components/shared/ClassroomCard/ClassroomCard";
import { connect } from "react-redux";
import Teacher from "./teacher.svg";
const StudentProfileClassView = (props) => {
  const { classrooms } = props.login.user;
  return (
    <div className="student-profile-class-view-wrapper">
      <div className="student-profile-class-view-heading">
        <img src={Teacher} className="student-profile-class-view-heading-icon" />
        <div className="student-profile-class-view-heading-content">
          <h1>ClassRoom</h1>
        </div>
      </div>
      <div className="student-profile-class-view-line"></div>
      <div className="student-profile-class-view-rooms">
        <div className="student-profile-class-view-classes">
          {classrooms.map((e, i) => {
            return (
              <ClassroomCard
                key={i}
                data={{
                  id: e.id,
                  name: e.subject,
                  instructor: e.name,
                  classImage: e.coverPhoto?.secureUrl,
                  instructorAvatar: e.teacher?.photo?.secureUrl,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(StudentProfileClassView);
