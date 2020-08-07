import React, { Component } from "react";
import ClassroomCard from "components/shared/ClassroomCard/ClassroomCard";
import { connect } from "react-redux";
import { getCurrentUserData } from "redux/actions/editStudentActions";
//styles
import "./TeacherHome.scss";
import Container from "components/shared/Container/Container";
import Async from "components/shared/Async/Async";

class TeacherHome extends Component {
  constructor() {
    super();
    this.state = {
      classRooms: [],
    };
  }
  componentDidMount() {
    this.props.getCurrentUserData();
  }
  render() {
    const { classRooms } = this.state;
    const { classrooms } = this.props.editStudent.curUser;
    const { uiState, error } = this.props.editStudent;
    return (
      <Async
        uiState={uiState}
        error={error}
        onSuccess={() => {
          return (
            <Container>
              <div className="cards-wrapper">
                {classrooms.map((e, i) => {
                  return (
                    <ClassroomCard
                      key={i}
                      data={{
                        id: e.id,
                        name: e.name,
                        instructor: e.teacher.name,
                        classImage: e.coverPhoto?.secureUrl,
                        instructorAvatar: e.teacher.photo?.secureUrl,
                      }}
                    />
                  );
                })}
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
export default connect(mapStateToProps, mapDispatchToProps)(TeacherHome);
