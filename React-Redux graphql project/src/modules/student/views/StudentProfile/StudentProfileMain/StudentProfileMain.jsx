import React, { Component, PureComponent } from "react";
import "./StudentProfileMain.scss";
import { connect } from "react-redux";
import { Upload, message, Button, Avatar, Card, Skeleton, Modal } from "antd";
import {
  UserOutlined,
  MailOutlined,
  CalendarOutlined,
  PhoneOutlined,
  HomeOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  UploadOutlined,
  DatabaseOutlined,
  EditOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import {
  getCurrentUserData,
  getUpdateCoverPhoto,
  getUpdateAvatar,
} from "redux/actions/editStudentActions";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import Alert from "components/shared/Alert/Alert";
import Loader from "components/shared/Loader/Loader";
import Spinner from "./Spinner.gif";
import { Link, Redirect } from "react-router-dom";
import backgroundCover from "assets/images/backgroundCover.png";
import moment from "moment";
class StudentProfileMain extends PureComponent {
  state = {
    visible: false,
  };
  showPic = () => {
    this.setState({
      visible: true,
    });
  };
  componentDidUpdate(preProps) {
    if (
      this.props.editStudent.uiStateUpdatingCoverPhoto === SUCCESS &&
      this.props.editStudent.uiStateUpdatingCoverPhoto !==
        preProps.editStudent.uiStateUpdatingCoverPhoto
    ) {
      message.success("Successful Update Cover Photo");
    }
    if (
      this.props.editStudent.uiStateUpdatingAvatar === SUCCESS &&
      this.props.editStudent.uiStateUpdatingAvatar !== preProps.editStudent.uiStateUpdatingAvatar
    ) {
      message.success("Successful update Avatar Photo");
    }
  }

  updateCoverPhoto = info => {
    const size = Math.ceil(info.file.originFileObj.size / 1024 / 1024);
    const type = info.file.originFileObj.type.startsWith("image/");
    if (size <= 9 && type) {
      this.props.getUpdateCoverPhoto(info.file.originFileObj);
    } else {
      message.error("Plz enter the size less than 9mb and image format");
    }
  };
  updateAvatar = info => {
    const size = Math.ceil(info.file.originFileObj.size / 1024 / 1024);
    const type = info.file.originFileObj.type.startsWith("image/");
    if (size <= 9 && type) {
      this.props.getUpdateAvatar(info.file.originFileObj);
    } else {
      message.error("Plz enter the size less than 9mb and image format");
    }
  };
  render() {
    const check = {
      customRequest() {
        return null;
      },
      showUploadList: false,
      multiple: false,
    };
    const socailLinksType = ["FACEBOOK", "GITHUB", "TWITTER", "INSTAGRAM"];
    const { error, uiStateUpdatingCoverPhoto, uiStateUpdatingAvatar } = this.props.editStudent;
    const style = {
      backgroundImage: `linear-gradient(to bottom, rgba(40, 48, 72, 0.3), rgba(133, 147, 152, 0.7)) ,url(${
        uiStateUpdatingCoverPhoto === SUCCESS ||
        uiStateUpdatingCoverPhoto === FAILED ||
        uiStateUpdatingCoverPhoto == null
          ? this.props.editStudent.curUser.coverPhoto
            ? this.props.editStudent.curUser.coverPhoto.secureUrl
            : backgroundCover
          : Spinner
      })`,
    };
    let socialLinks = [];
    if (this.props.editStudent.curUser.socialLinks) {
      socialLinks = this.props.editStudent.curUser.socialLinks.map((el, index) => {
        if (el.type === socailLinksType[0]) {
          return (
            <a href={el.link} key={index}>
              <FacebookOutlined className="student-profile-main-social-links-group-icon-1" />
            </a>
          );
        }
        if (el.type === socailLinksType[1]) {
          return (
            <a href={el.link} key={index}>
              <GithubOutlined className="student-profile-main-social-links-group-icon-2" />
            </a>
          );
        }
        if (el.type === socailLinksType[2]) {
          return (
            <a href={el.link} key={index}>
              <TwitterOutlined className="student-profile-main-social-links-group-icon-3" />
            </a>
          );
        }
        if (el.type === socailLinksType[3]) {
          return (
            <a href={el.link} key={index}>
              <InstagramOutlined className="student-profile-main-social-links-group-icon-4" />
            </a>
          );
        }
      });
    }
    return (
      <div className="student-profile-main-wrapper">
        <div className="student-profile-main-background" style={style}>
          <div className="student-profile-main-background-button">
            <UploadOutlined className="student-profile-main-background-button-icon" />
            <Upload {...check} onChange={this.updateCoverPhoto}>
              <Button className="student-profile-main-background-button-btn">
                Click to Upload
              </Button>
            </Upload>
          </div>
          <div className="student-profile-main-border-color">
            <div className="student-profile-main-picture">
              {uiStateUpdatingAvatar === SUCCESS ||
              uiStateUpdatingAvatar === FAILED ||
              uiStateUpdatingAvatar == null ? (
                <Avatar
                  size={120}
                  icon={<UserOutlined />}
                  src={
                    this.props.editStudent.curUser.photo
                      ? this.props.editStudent.curUser.photo.secureUrl
                      : ""
                  }
                />
              ) : (
                <Skeleton.Avatar active={true} size={120} shape="circle" />
              )}
            </div>
            <div className="student-profile-main-upload" onClick={this.showPic}>
              <div onClick={e => e.stopPropagation()}>
                <Upload {...check} onChange={this.updateAvatar}>
                  <UploadOutlined className="student-profile-main-upload-icon" />
                </Upload>
              </div>
            </div>
          </div>
        </div>
        <div className="student-profile-main-content-box">
          <div className="student-profile-main-info">
            <div className="student-profile-main-info-content">
              <div className="student-profile-main-info-content-heading">
                <MailOutlined className="student-profile-main-info-content-heading-icon" />
                <div className="student-profile-main-info-content-heading-content">Email</div>
              </div>
              <div className="student-profile-main-info-content-detail">
                {this.props.editStudent.curUser.email}
              </div>
            </div>
            <div className="student-profile-main-info-content">
              <div className="student-profile-main-info-content-heading">
                <CalendarOutlined className="student-profile-main-info-content-heading-icon" />
                <div className="student-profile-main-info-content-heading-content">DOB</div>
              </div>
              <div className="student-profile-main-info-content-detail">
                {this.props.editStudent.curUser.dob
                  ? moment(this.props.editStudent.curUser.dob).format("Do MMMM YYYY")
                  : "none"}
              </div>
            </div>
            <div className="student-profile-main-info-content">
              <div className="student-profile-main-name">
                <h2>{this.props.editStudent.curUser.name}</h2>
                <p>{this.props.editStudent.curUser.role}</p>
              </div>
            </div>
            <div className="student-profile-main-info-content">
              <div className="student-profile-main-info-content-heading">
                <PhoneOutlined className="student-profile-main-info-content-heading-icon" />
                <div className="student-profile-main-info-content-heading-content">Contact Us</div>
              </div>
              <div className="student-profile-main-info-content-detail">
                {this.props.editStudent.curUser.phone
                  ? this.props.editStudent.curUser.phone
                  : "none"}
              </div>
            </div>
            <div className="student-profile-main-info-content">
              <div className="student-profile-main-info-content-heading">
                <HomeOutlined className="student-profile-main-info-content-heading-icon" />
                <div className="student-profile-main-info-content-heading-content">Location</div>
              </div>
              <div className="student-profile-main-info-content-detail">
                {this.props.editStudent.curUser.address
                  ? this.props.editStudent.curUser.address
                  : "none"}
              </div>
            </div>
          </div>
          <div className="student-profile-main-social-links">
            <div className="student-profile-main-social-links-line"></div>
            <div className="student-profile-main-social-links-group">
              {socialLinks.length !== 0 ? (
                socialLinks
              ) : (
                <p style={{ fontSize: "1rem", fontWeight: "500" }}>None Social Links</p>
              )}
              {/* {this.props.editStudent.curUser.socialLinks.length == 0 && (
                <>
                  <FacebookOutlined className="student-profile-main-social-links-group-icon-1" />
                  <GithubOutlined className="student-profile-main-social-links-group-icon-2" />
                  <TwitterOutlined className="student-profile-main-social-links-group-icon-3" />
                  <InstagramOutlined className="student-profile-main-social-links-group-icon-4" />
                </>
              )} */}
            </div>
          </div>
        </div>
        <Modal
          visible={this.state.visible}
          footer={null}
          closable={false}
          className="picture-modal-wrapper"
          width="90vh"
          style={{
            top: "20%",
          }}
          onCancel={() => this.setState({ visible: false })}>
          {this.props.editStudent.curUser.photo && (
            <div className="picture-wrapper">
              <img
                className="picture-modal"
                src={
                  this.props.editStudent.curUser.photo
                    ? this.props.editStudent.curUser.photo.secureUrl
                    : ""
                }
                alt="pic user"
              />
            </div>
          )}
        </Modal>
        {uiStateUpdatingCoverPhoto === FAILED && <Alert message={error} type="error" showIcon />}
        {uiStateUpdatingAvatar === FAILED && <Alert message={error} type="error" showIcon />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    editStudent: state.editStudent,
  };
};
const mapDispatchToProps = {
  getCurrentUserData,
  getUpdateCoverPhoto,
  getUpdateAvatar,
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentProfileMain);
