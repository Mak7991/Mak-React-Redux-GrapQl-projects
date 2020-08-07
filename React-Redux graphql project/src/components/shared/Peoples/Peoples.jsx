import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import Users from "components/shared/Peoples/Users/Users";
import Heading from "components/shared/Peoples/Heading/Heading";
import "components/shared/Peoples/Peoples.scss";
import Container from "components/shared/Container/Container";
import { getCurrentClassRoomInfo } from "redux/actions/classRoomActions";
import Async from "components/shared/Async/Async";

class People extends Component {

  render() {
    const { teacher, students } = this.props.data;
    return (
      <Container>
        <div className="people-box">
          <div className="people-teacher">
            <Heading title="Teacher" />
            {teacher && (
              <div className="people-grap">
                <Users name={teacher?.name} img={teacher?.photo?.secureUrl} />
              </div>
            )}
            {!teacher && (
              <div className="people-grap">
                <div class="noassign-center-text">
                  <h4>No teacher is Assign yet to this class</h4>
                </div>
              </div>
            )}
          </div>
          <div className="people-students">
            <Heading title="Students" />
            {students && (
              <div className="people-gap">
                {students?.map((obj, ind) => (
                  <Users name={obj.name} key={ind} img={obj.photo?.secureUrl} />
                ))}
              </div>
            )}
            {!students && (
              <div className="people-gap">
                <div class="noassign-center-text">
                  <h4>No students is Assign yet to this class</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    );
  }
}
export default People;
