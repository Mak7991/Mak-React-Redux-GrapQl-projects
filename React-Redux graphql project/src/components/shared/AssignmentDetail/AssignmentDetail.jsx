import React, { Component } from "react";
import { ReadOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";

import Container from "components/shared/Container/Container";
import InputComment from "components/shared/InputComment/InputComment";
import PostBody from "components/shared/PostBody/PostBody";
import "./AssignmentDetail.scss";

class AssignmentDetail extends Component {
  state = {
    commentText: "",
  };
  onChangeTextarea = (event) => {
    this.setState({ commentText: event.target.value });
  };
  onClickPostButton = () => {
    alert(this.state.commentText);
  };
  render() {
    return (
      <Container>
        <div className="assignment-detail-wrapper">
          <div className="assignment-detail">
            <div className="assignment-detail-left-side">
              <div className="assignment-detail-icon">
                <Avatar
                  size="large"
                  style={{ backgroundColor: "#1890ff" }}
                  icon={<ReadOutlined style={{ fontSize: "1.5rem" }} />}></Avatar>
              </div>
            </div>
            <div className="assignment-detail-right-side">
              <div>
                <div className="assignment-detail-header">
                  <div>
                    <h1>Hackathon 1</h1>
                  </div>
                  <div>
                    <h1>100 points</h1>
                  </div>
                </div>
                <div className="assignment-detail-avatar-info">
                  <div>
                    <Avatar src="https://res.cloudinary.com/ayms-ed/image/upload/v1585767563/samples/people/bicycle.jpg" />
                  </div>
                  <div>
                    <h3>Kashif Suleman</h3>
                  </div>
                  <div>
                    <span>Oct 16, 2019</span>
                  </div>
                </div>
                <PostBody />
                <InputComment
                  onChangeTextarea={this.onChangeTextarea}
                  onClickPostButton={this.onClickPostButton}
                  title="Class comment"
                />
              </div>
            </div>
          </div>

          <div className="assignment-detail-submit-box">
            <div className="assignment-heading">
              <h2>Your Work</h2>
            </div>
            <div className="assignment-detail-button-box">
              <div className="assignment-detail-button">
                <Button block icon={<PlusOutlined style={{ color: "#40a9ff" }} />}>
                  <span className="assignment-detail-button-color">Submit Assignment</span>
                </Button>
              </div>
              <div className="assignment-detail-button">
                <Button block type="primary">
                  Mark as Done
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default AssignmentDetail;
