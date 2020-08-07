import React, { Component } from "react";
import Container from "components/shared/Container/Container";
import { connect } from "react-redux";
import "./TeacherProfile.scss";
import TeacherProfileMain from "modules/teacher/views/TeacherProfile/TeacherProfileMain/TeacherProfileMain";
import TeacherProfileClassView from "modules/teacher/views/TeacherProfile/TeacherProfileClassView/TeacherProfileClassView";
import TeacherProfileDetails from "modules/teacher/views/TeacherProfile/TeacherProfileDetails/TeacherProfileDetails";
import { getCurrentUserData } from "redux/actions/editTeacherActions";
import Async from "components/shared/Async/Async";
class TeacherPorfile extends Component {
  componentDidMount() {
    this.props.getCurrentUserData();
  }
  render() {
    const { uiState, error } = this.props.editTeacher;
    return (
      <Async
        uiState={uiState}
        error={error}
        onSuccess={() => {
          return (
            <Container>
              <div className="teacher-profile-margin">
                <TeacherProfileMain />
              </div>
              <div className="teacher-profile-margin">
                <TeacherProfileDetails />
              </div>
              <div className="teacher-profile-margin">
                <TeacherProfileClassView />
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
    editTeacher: state.editTeacher,
  };
};
const mapDispatchToProps = {
  getCurrentUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(TeacherPorfile);
