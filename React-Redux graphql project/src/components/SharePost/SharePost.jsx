import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Avatar, Upload, Input, Button, message } from "antd";
import { PaperClipOutlined, UserOutlined } from "@ant-design/icons";
import "./SharePost.scss";
import { createPostStudent } from "redux/actions/classRoomActions";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import Alert from "components/shared/Alert/Alert";
class SharePost extends PureComponent {
  state = {
    isPostInputActive: false,
    inputText: "",
    attachedFiles: [],
  };

  handlePostInputActiveToggle = () => {
    const { isPostInputActive } = this.state;
    this.setState({ isPostInputActive: !isPostInputActive });
  };

  handleAddFiles = () => {
    if (this.inputRef) {
      this.inputRef.click();
    }
  };
  createPostHandler = () => {
    const { classroomId } = this.props.match.params;
    this.props.createPostStudent(classroomId, this.state.inputText);
    this.setState({
      inputText: "",
    });
  };
  componentDidUpdate(prevProps) {
    if (
      this.props.classRoom.uiStatePost === SUCCESS &&
      this.props.classRoom.uiStatePost !== prevProps.classRoom.uiStatePost
    ) {
      message.success("Successful Post");
    }
  }
  render() {
    const { isPostInputActive, inputText, attachedFiles } = this.state;
    const { uiStatePost, error } = this.props.classRoom;
    const { photo } = this.props.login;
    const props = {
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      listType: "picture",
      defaultFileList: [...attachedFiles],
    };
    return (
      <div className="sharepost-wrapper">
        <div className="sharepost">
          {!isPostInputActive ? (
            <div className="sharepost-trigger" onClick={this.handlePostInputActiveToggle}>
              <Avatar
                icon={<UserOutlined />}
                src={photo?.secureUrl}
                alt="profile pic"
                size="large"
              />
              <h3 className="sharepost-trigger-name"> Share someting with your class</h3>
            </div>
          ) : (
            <div className="sharepost-triggered-input-box">
              <Input.TextArea
                allowClear
                value={inputText}
                onChange={(e) => this.setState({ inputText: e.target.value })}
                placeholder="Share someting with your class"
                autoSize={{ minRows: 6, maxRows: 6 }}
              />
              <div>
                <Upload {...props}>
                  <input type="hidden" ref={(r) => (this.inputRef = r)} />
                </Upload>
              </div>
              <div className="sharepost-triggered-action-buttons">
                <div className="left-side-buttons">
                  <Button icon={<PaperClipOutlined />} onClick={() => this.handleAddFiles()}>
                    Add
                  </Button>
                </div>
                <div className="right-side-buttons">
                  <Button ghost type="primary" onClick={this.handlePostInputActiveToggle}>
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    className="right-side-post-button"
                    onClick={this.createPostHandler}>
                    Post
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
        {uiStatePost === FAILED && <Alert message={error} type="error" showIcon />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login.user,
    classRoom: state.classRoom,
  };
};
const mapDispatchToProps = {
  createPostStudent,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SharePost));
