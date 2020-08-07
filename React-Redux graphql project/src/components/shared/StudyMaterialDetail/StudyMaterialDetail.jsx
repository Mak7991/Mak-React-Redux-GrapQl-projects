import React, { Component } from "react";
import Container from "components/shared/Container/Container";
import { ReadOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import InputComment from "components/shared/InputComment/InputComment";
import PostBody from "components/shared/PostBody/PostBody";
import "components/shared/StudyMaterialDetail/StudyMaterialDetail.scss";
class StudyMaterialDetail extends Component {
  state = {
    commentText: "",
  };
  onChangeTextarea = event => {
    this.setState({ commentText: event.target.value });
  };
  onClickPostButton = () => {
    alert(this.state.commentText);
  };
  render() {
    return (
      <Container>
        <div className="study-material-detail-wrapper">
          <div className="study-material-detail">
            <div className="study-material-detail-left-side">
              <div className="study-material-detail-icon">
                <Avatar
                  size="large"
                  style={{ backgroundColor: "#1890ff" }}
                  icon={<ReadOutlined style={{ fontSize: "1.5rem" }} />}></Avatar>
              </div>
            </div>
            <div className="study-material-detail-right-side">
              <div>
                <div className="study-material-detail-header">
                  <div>
                    <h1>Hackathon 1</h1>
                  </div>
                  <div>
                    <h1>100 points</h1>
                  </div>
                </div>
                <div className="study-material-detail-avatar-info">
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
        </div>
      </Container>
    );
  }
}

export default StudyMaterialDetail;
