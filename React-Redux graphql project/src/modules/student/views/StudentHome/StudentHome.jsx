import React, { Component } from "react";
import { connect } from "react-redux";
import { Result, Button } from "antd";
import { SmileOutlined, IssuesCloseOutlined } from "@ant-design/icons";

//components
import ClassroomCard from "components/shared/ClassroomCard/ClassroomCard";
import Container from "components/shared/Container/Container";
import Async from "components/shared/Async/Async";

//redux
import { getCurrentUserData } from "redux/actions/editStudentActions";

//scss
import "./StudentHome.scss";

class StudentHome extends Component {
  render() {
    const { classrooms } = this.props.login.user;
    return (
      <Container>
        <div className="cards-wrapper">
          {classrooms.length > 0 ? (
            classrooms.map((e, i) => {
              return (
                <ClassroomCard
                  key={i}
                  data={{
                    id: e.id,
                    name: e.name,
                    teacher: e.teacher,
                    coverPhoto: e.coverPhoto,
                  }}
                />
              );
            })
          ) : (
            <div className="no-classroom">
              <Result
                icon={<IssuesCloseOutlined />}
                title="if you are not enroll any classroom plz contact to administrator"
              />
            </div>
          )}
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(StudentHome);
