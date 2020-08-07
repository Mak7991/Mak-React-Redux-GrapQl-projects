import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentClassRoomInfo } from "redux/actions/classRoomActions";
import Async from "components/shared/Async/Async";
import People from "components/shared/Peoples/Peoples";
class PeopleContainer extends Component {
  componentDidMount() {
    const { classroomId } = this.props.match.params;
    this.props.getCurrentClassRoomInfo(classroomId);
  }
  render() {
    const { uiState, error } = this.props.classRoom;
    return (
      <Async
        uiState={uiState}
        error={error}
        onSuccess={() => <People data={this.props.classRoom.curClassRoom} />}
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
export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
