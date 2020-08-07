import React from "react";
import "./StudentFormDesign.scss";
const StudentFormDesign = (props) => {
  return (
    <div className="student-profile-edit-wrapper">
      <div className="student-profile-edit-side">
        <div className="student-profile-side-text-box">
          <div className="student-profile-side-heading">
            <h2>{props.title}:</h2>
          </div>
          <div className="student-profile-side-content">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
      <div className="student-profile-edit-main">{props.children}</div>
    </div>
  );
};
export default StudentFormDesign;
