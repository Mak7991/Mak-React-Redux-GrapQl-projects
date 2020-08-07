import React, { Component } from "react";
import Container from "components/shared/Container/Container";
import { connect } from "react-redux";
import "./StudentProfile.scss";
import StudentProfileMain from "modules/student/views/StudentProfile/StudentProfileMain/StudentProfileMain";
import StudentProfileClassView from "modules/student/views/StudentProfile/StudentProfileClassView/StudentProfileClassView";
import StudentProfileDetails from "modules/student/views/StudentProfile/StudentProfileDetails/StudentProfileDetails";
import { getCurrentUserData } from "redux/actions/editStudentActions";
import Async from "components/shared/Async/Async";
class StudentPorfile extends Component {
  componentDidMount() {
    this.props.getCurrentUserData();
  }
  render() {
    const { uiState, error } = this.props.editStudent;
    return (
      <Async
        uiState={uiState}
        error={error}
        onSuccess={() => {
          return (
            <Container>
              <div className="student-profile-margin">
                <StudentProfileMain />
              </div>
              <div className="student-profile-margin">
                <StudentProfileDetails />
              </div>
              <div className="student-profile-margin">
                <StudentProfileClassView />
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
    editStudent: state.editStudent,
  };
};
const mapDispatchToProps = {
  getCurrentUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentPorfile);
