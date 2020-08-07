import React, { Component } from "react";
import { Avatar, Button, Input, Divider } from "antd";
import { ReadOutlined, FileTextOutlined, SendOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//componnets
import InputComment from "components/shared/InputComment/InputComment";
import Comment from "components/shared/Comment/Comment";
import PostBody from "components/shared/PostBody/PostBody";

//styles
import "./ClassroomPost.scss";

export class ClassroomPost extends Component {
  state = {
    isShowComment: true,
  };
  handlShowCommnetToggle = () => {
    const { isShowComment } = this.state;
    this.setState({ isShowComment: !isShowComment });
  };
  render() {
    const { isShowComment } = this.state;
    const { postType, name, postName, date, comments, profileImage, classId } = this.props.data;
    let SIcon = null;
    let postText = null;
    switch (postType) {
      case "assignment":
        SIcon = ReadOutlined;
        postText = `${name} posted a new assignment: ${postName}`;
        break;
      case "studyMaterial":
        SIcon = FileTextOutlined;
        postText = `${name} posted a new material: ${postName}`;
        break;
      case "normal":
        return (
          <div className="normal-post-wrapper">
            <div className="normal-post">
              <div className="normal-post-header">
                <Avatar size="large" src={profileImage?.secureUrl} icon={<UserOutlined />} />
                <div className="normal-post-header-text-content">
                  <h3>{name}</h3>
                  <span>{date}</span>
                </div>
              </div>
              <PostBody data={postName} />
              <div className="normal-post-footer">
                <div>
                  <Button block>Like</Button>
                </div>
                <div>
                  <Button block onClick={this.handlShowCommnetToggle}>
                    Comment
                  </Button>
                </div>
              </div>
              {isShowComment && (
                <>
                  {Array.isArray(comments) && comments.length === 0 ? (
                    <>
                      <Divider />
                      <div className="normal-post-comment-box">
                        <InputComment />
                        <h4>no comments</h4>
                      </div>
                    </>
                  ) : (
                    comments?.map((el, index) => {
                      return (
                        <>
                          <Divider />
                          <div className="normal-post-comment-box">
                            <InputComment />
                            <Divider />
                            <Comment
                              commentText={el.commentText}
                              avatarSrc={el.author.photo?.secureUrl}
                              author={el.author.name}
                            />
                          </div>
                        </>
                      );
                    })
                  )}
                </>
              )}
            </div>
          </div>
        );
        break;
    }
    return (
      <Link to={`/${classId}/assignmentDetail`}>
        <div className="classroom-post-wrapper">
          <div className="classroom-post">
            <Avatar
              size="large"
              style={{ backgroundColor: "#1890ff" }}
              icon={<SIcon style={{ fontSize: "1.5rem" }} />}></Avatar>
            <div className="classroom-post-text-content">
              <h3>{postText}</h3>
              <p>Oct 16, 2019</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(ClassroomPost);
