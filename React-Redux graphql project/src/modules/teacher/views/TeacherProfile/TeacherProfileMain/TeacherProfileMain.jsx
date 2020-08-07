import React, { Component, PureComponent } from "react";
import "./TeacherProfileMain.scss";
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
} from "redux/actions/editTeacherActions";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import Alert from "components/shared/Alert/Alert";
import Loader from "components/shared/Loader/Loader";
import Spinner from "./Spinner.gif";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";
import backgroundCover from "assets/images/backgroundCover.png";
class TeacherProfileMain extends PureComponent {
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
      this.props.editTeacher.uiStateUpdatingCoverPhoto === SUCCESS &&
      this.props.editTeacher.uiStateUpdatingCoverPhoto !==
        preProps.editTeacher.uiStateUpdatingCoverPhoto
    ) {
      message.success("Successful Update Cover Photo");
    }
    if (
      this.props.editTeacher.uiStateUpdatingAvatar === SUCCESS &&
      this.props.editTeacher.uiStateUpdatingAvatar !== preProps.editTeacher.uiStateUpdatingAvatar
    ) {
      message.success("Successful update Avatar Photo");
    }
  }

  updateCoverPhoto = (info) => {
    const size = Math.ceil(info.file.originFileObj.size / 1024 / 1024);
    const type = info.file.originFileObj.type.startsWith("image/");
    if (size <= 9 && type) {
      this.props.getUpdateCoverPhoto(info.file.originFileObj);
    } else {
      message.error("Plz enter the size less than 9mb and image format");
    }
  };
  updateAvatar = (info) => {
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
    const {
      uiState,
      error,
      uiStateUpdatingCoverPhoto,
      uiStateUpdatingAvatar,
    } = this.props.editTeacher;
    const style = {
      backgroundImage: `linear-gradient(to bottom, rgba(40, 48, 72, 0.3), rgba(133, 147, 152, 0.7)) ,url(${
        uiStateUpdatingCoverPhoto == SUCCESS ||
        uiStateUpdatingCoverPhoto == FAILED ||
        uiStateUpdatingCoverPhoto == null
          ? this.props.editTeacher.curUser.coverPhoto
            ? this.props.editTeacher.curUser.coverPhoto.secureUrl
            : backgroundCover
          : Spinner
      })`,
    };
    let socialLinks = [];
    if (this.props.editTeacher.curUser.socialLinks) {
      socialLinks = this.props.editTeacher.curUser.socialLinks.map((el, index) => {
        if (el.type === socailLinksType[0]) {
          return (
            <a href={el.link} key={index}>
              <FacebookOutlined className="teacher-profile-main-social-links-group-icon-1" />
            </a>
          );
        }
        if (el.type === socailLinksType[1]) {
          return (
            <a href={el.link} key={index}>
              <GithubOutlined className="teacher-profile-main-social-links-group-icon-2" />
            </a>
          );
        }
        if (el.type === socailLinksType[2]) {
          return (
            <a href={el.link} key={index}>
              <TwitterOutlined className="teacher-profile-main-social-links-group-icon-3" />
            </a>
          );
        }
        if (el.type === socailLinksType[3]) {
          return (
            <a href={el.link} key={index}>
              <InstagramOutlined className="teacher-profile-main-social-links-group-icon-4" />
            </a>
          );
        }
      });
    }
    return (
      <div className="teacher-profile-main-wrapper">
        <div className="teacher-profile-main-background" style={style}>
          <div className="teacher-profile-main-background-button">
            <UploadOutlined className="teacher-profile-main-background-button-icon" />
            <Upload {...check} onChange={this.updateCoverPhoto}>
              <Button className="teacher-profile-main-background-button-btn">
                Click to Upload
              </Button>
            </Upload>
          </div>
          <div className="teacher-profile-main-border-color">
            <div className="teacher-profile-main-picture">
              {uiStateUpdatingAvatar == SUCCESS ||
              uiStateUpdatingAvatar == FAILED ||
              uiStateUpdatingAvatar == null ? (
                <Avatar
                  size={120}
                  icon={<UserOutlined />}
                  src={
                    this.props.editTeacher.curUser.photo
                      ? this.props.editTeacher.curUser.photo.secureUrl
                      : ""
                  }
                />
              ) : (
                <Skeleton.Avatar active={true} size={120} shape="circle" />
              )}
            </div>
            <div className="teacher-profile-main-upload" onClick={this.showPic}>
              <div onClick={(e) => e.stopPropagation()}>
                <Upload {...check} onChange={this.updateAvatar}>
                  <UploadOutlined className="teacher-profile-main-upload-icon" />
                </Upload>
              </div>
            </div>
          </div>
        </div>
        <div className="teacher-profile-main-content-box">
          <div className="teacher-profile-main-info">
            <div className="teacher-profile-main-info-content">
              <div className="teacher-profile-main-info-content-heading">
                <MailOutlined className="teacher-profile-main-info-content-heading-icon" />
                <div className="teacher-profile-main-info-content-heading-content">Email</div>
              </div>
              <div className="teacher-profile-main-info-content-detail">
                {this.props.editTeacher.curUser.email}
              </div>
            </div>
            <div className="teacher-profile-main-info-content">
              <div className="teacher-profile-main-info-content-heading">
                <CalendarOutlined className="teacher-profile-main-info-content-heading-icon" />
                <div className="teacher-profile-main-info-content-heading-content">DOB</div>
              </div>
              <div className="teacher-profile-main-info-content-detail">
                {this.props.editTeacher.curUser.dob
                  ? moment(this.props.editTeacher.curUser.dob).format("Do MMMM YYYY")
                  : "none"}
              </div>
            </div>
            <div className="teacher-profile-main-info-content">
              <div className="teacher-profile-main-name">
                <h2>{this.props.editTeacher.curUser.name}</h2>
                <p>{this.props.editTeacher.curUser.role}</p>
              </div>
            </div>
            <div className="teacher-profile-main-info-content">
              <div className="teacher-profile-main-info-content-heading">
                <PhoneOutlined className="teacher-profile-main-info-content-heading-icon" />
                <div className="teacher-profile-main-info-content-heading-content">Contact Us</div>
              </div>
              <div className="teacher-profile-main-info-content-detail">
                {this.props.editTeacher.curUser.phone
                  ? this.props.editTeacher.curUser.phone
                  : "none"}
              </div>
            </div>
            <div className="teacher-profile-main-info-content">
              <div className="teacher-profile-main-info-content-heading">
                <HomeOutlined className="teacher-profile-main-info-content-heading-icon" />
                <div className="teacher-profile-main-info-content-heading-content">Location</div>
              </div>
              <div className="teacher-profile-main-info-content-detail">
                {this.props.editTeacher.curUser.address
                  ? this.props.editTeacher.curUser.address
                  : "none"}
              </div>
            </div>
          </div>
          <div className="teacher-profile-main-social-links">
            <div className="teacher-profile-main-social-links-line"></div>
            <div className="teacher-profile-main-social-links-group">
              {socialLinks.length !== 0 ? (
                socialLinks
              ) : (
                <p style={{ fontSize: "1rem", fontWeight: "500" }}>None Social Links</p>
              )}
              {/* {this.props.editTeacher.curUser.socialLinks.length == 0 && (
                <>
                  <FacebookOutlined className="teacher-profile-main-social-links-group-icon-1" />
                  <GithubOutlined className="teacher-profile-main-social-links-group-icon-2" />
                  <TwitterOutlined className="teacher-profile-main-social-links-group-icon-3" />
                  <InstagramOutlined className="teacher-profile-main-social-links-group-icon-4" />
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
          {this.props.editTeacher.curUser.photo && (
            <div className="picture-wrapper">
              <img
                className="picture-modal"
                src={
                  this.props.editTeacher.curUser.photo
                    ? this.props.editTeacher.curUser.photo.secureUrl
                    : ""
                }
                alt="pic user"
              />
            </div>
          )}
        </Modal>
        {uiState === FAILED && <Alert message={error} type="error" showIcon />}
        {uiStateUpdatingCoverPhoto === FAILED && <Alert message={error} type="error" showIcon />}
        {uiStateUpdatingAvatar === FAILED && (
          <Alert message={error.message} type="error" showIcon />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    editTeacher: state.editTeacher,
  };
};
const mapDispatchToProps = {
  getCurrentUserData,
  getUpdateCoverPhoto,
  getUpdateAvatar,
};
export default connect(mapStateToProps, mapDispatchToProps)(TeacherProfileMain);
