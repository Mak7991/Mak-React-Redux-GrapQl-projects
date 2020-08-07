import React from "react";
import "./TeacherFormDesign.scss";
const TeacherFormDesign = (props) => {
  return (
    <div className="teacher-profile-edit-wrapper">
      <div className="teacher-profile-edit-side">
        <div className="teacher-profile-side-text-box">
          <div className="teacher-profile-side-heading">
            <h2>{props.title}:</h2>
          </div>
          <div className="teacher-profile-side-content">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
      <div className="teacher-profile-edit-main">{props.children}</div>
    </div>
  );
};
export default TeacherFormDesign;
