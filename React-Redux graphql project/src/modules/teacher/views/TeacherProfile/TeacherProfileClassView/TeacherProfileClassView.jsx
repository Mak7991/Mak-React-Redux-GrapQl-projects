import React from "react";
import "./TeacherProfileClassView.scss";
import ClassroomCard from "components/shared/ClassroomCard/ClassroomCard";
import Teacher from "./teacher.svg";
import classRooms from "assets/dummy-data/Classroom";

const TeacherProfileClassView = () => {
  return (
    <div className="teacher-profile-class-view-wrapper">
      <div className="teacher-profile-class-view-heading">
        <img
          src={Teacher}
          alt="teacherprofile"
          className="teacher-profile-class-view-heading-icon"
        />
        <div className="teacher-profile-class-view-heading-content">
          <h1>ClassRoom</h1>
        </div>
      </div>
      <div className="teacher-profile-class-view-line"></div>
      <div className="teacher-profile-class-view-rooms">
        <div className="teacher-profile-class-view-classes">
          {classRooms.map((e, i) => {
            return <ClassroomCard key={i} data={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileClassView;
