import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Container from "components/shared/Container/Container";
import ClassroomJumbotron from "components/shared/ClassroomJumbotron/ClassroomJumbotron";
import { connect } from "react-redux";
import "./ClassroomFeed.scss";
import SharePost from "components/SharePost/SharePost";
import ClassroomPost from "components/ClassroomPost/ClassroomPost";
import { getCurrentClassRoomInfo } from "redux/actions/classRoomActions";
import Async from "components/shared/Async/Async";
export class ClassroomFeed extends Component {
  componentDidMount() {
    const { classroomId } = this.props.match.params;
    this.props.getCurrentClassRoomInfo(classroomId);
  }
  render() {
    const { uiState, error } = this.props.classRoom;
    const { posts } = this.props.classRoom.curClassRoom;
    const { classroomId } = this.props.match.params;
    return (
      <Async
        uiState={uiState}
        error={error}
        onSuccess={() => {
          return (
            <Container>
              <div className="classroom-feed-wrapper">
                <div className="classroom-feed">
                  <ClassroomJumbotron data={this.props.classRoom.curClassRoom} />
                  <SharePost />
                  <div className="classroom-posts">
                    <ClassroomPost
                      data={{
                        postType: "assignment",
                        name: "Ali Khan",
                        postName: "Pre Mid Assignment 2",
                        classId: classroomId,
                      }}
                    />
                  </div>
                  <div className="classroom-posts">
                    <ClassroomPost
                      data={{
                        postType: "studyMaterial",
                        name: "Ali Khan",
                        postName: "Assignment 2 help material",
                        classId: classroomId,
                      }}
                    />
                  </div>
                  {posts.map((el, index) => {
                    return (
                      <div className="classroom-posts" key={index}>
                        <ClassroomPost
                          data={{
                            postType: "normal",
                            name: el.author.name,
                            date: el.createdAt,
                            profileImage: el.author.photo,
                            postName: el.postText,
                            comments: el.commnets,
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Container>
          );
        }}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    classRoom: state.classRoom,
  };
};
const mapDispatchToProps = {
  getCurrentClassRoomInfo,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClassroomFeed));
