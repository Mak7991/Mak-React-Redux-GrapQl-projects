import React from "react";
import { connect } from "react-redux";
import { UserOutlined, DatabaseOutlined, EditOutlined } from "@ant-design/icons";
import "./StudentProfileDetails.scss";
const StudentProfileDetails = (props) => {
  const { bio, education, gender } = props.login.user;
  let educations = education?.map((el, index) => <div key={index}>{el}</div>);
  return (
    <div className="student-profile-detials-wrapper">
      <div className="student-profile-detials-heading">
        <h1>More Details</h1>
      </div>
      <div className="student-profile-details-line"></div>
      <div className="student-profile-details-content">
        <div className="student-profile-details-info-content">
          <div className="student-profile-details-info-content-heading">
            <DatabaseOutlined className="student-profile-details-info-content-heading-icon" />
            <div className="student-profile-details-info-content-heading-content">Bio-data</div>
          </div>
          <div className="student-profile-details-info-content-detail">{bio ? bio : "none"}</div>
        </div>
        <div className="student-profile-details-info-content">
          <div className="student-profile-details-info-content-heading">
            <EditOutlined className="student-profile-details-info-content-heading-icon" />
            <div className="student-profile-details-info-content-heading-content">Education</div>
          </div>
          <div className="student-profile-details-info-content-detail">
            {educations ? educations : "none"}
          </div>
        </div>
        <div className="student-profile-details-info-content">
          <div className="student-profile-details-info-content-heading">
            <UserOutlined className="student-profile-details-info-content-heading-icon" />
            <div className="student-profile-details-info-content-heading-content">Gender</div>
          </div>
          <div className="student-profile-details-info-content-detail">
            {gender ? gender : "none"}
          </div>
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
export default connect(mapStateToProps)(StudentProfileDetails);
