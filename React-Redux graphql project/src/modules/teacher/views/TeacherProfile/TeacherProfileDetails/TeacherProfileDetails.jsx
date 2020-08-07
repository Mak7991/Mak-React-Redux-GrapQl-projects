import React from "react";
import { connect } from "react-redux";
import { UserOutlined, DatabaseOutlined, EditOutlined } from "@ant-design/icons";
import "./TeacherProfileDetails.scss";
const TeacherProfileDetails = (props) => {
  let education = [];
  if (props.editTeacher.curUser.education) {
    education = props.editTeacher.curUser.education.map((el, index) => {
      return <div key={index}>{el}</div>;
    });
  }
  return (
    <div className="teacher-profile-detials-wrapper">
      <div className="teacher-profile-detials-heading">
        <h1>More Details</h1>
      </div>
      <div className="teacher-profile-details-line"></div>
      <div className="teacher-profile-details-content">
        <div className="teacher-profile-details-info-content">
          <div className="teacher-profile-details-info-content-heading">
            <DatabaseOutlined className="teacher-profile-details-info-content-heading-icon" />
            <div className="teacher-profile-details-info-content-heading-content">Bio-data</div>
          </div>
          <div className="teacher-profile-details-info-content-detail">
            {props.editTeacher.curUser.bio ? props.editTeacher.curUser.bio : "none"}
          </div>
        </div>
        <div className="teacher-profile-details-info-content">
          <div className="teacher-profile-details-info-content-heading">
            <EditOutlined className="teacher-profile-details-info-content-heading-icon" />
            <div className="teacher-profile-details-info-content-heading-content">Education</div>
          </div>
          <div className="teacher-profile-details-info-content-detail">
            {education ? education : "none"}
          </div>
        </div>
        <div className="teacher-profile-details-info-content">
          <div className="teacher-profile-details-info-content-heading">
            <UserOutlined className="teacher-profile-details-info-content-heading-icon" />
            <div className="teacher-profile-details-info-content-heading-content">Gender</div>
          </div>
          <div className="teacher-profile-details-info-content-detail">
            {props.editTeacher.curUser.gender ? props.editTeacher.curUser.gender : "none"}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    editTeacher: state.editTeacher,
  };
};
export default connect(mapStateToProps)(TeacherProfileDetails);
