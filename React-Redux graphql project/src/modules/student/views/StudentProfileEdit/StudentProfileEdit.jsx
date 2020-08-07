import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Avatar, message, Upload, Select, DatePicker } from "antd";
import moment from "moment";
import {
  UserOutlined,
  UploadOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  MinusCircleOutlined,
  PlusOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import Container from "components/shared/Container/Container";
import TextArea from "antd/lib/input/TextArea";
import StudentFormDesign from "modules/student/views/StudentProfileEdit/StudentFormDesign/StudentFormDesign";
import "./StudentProfileEdit.scss";
import {
  getCurrentUserData,
  getUpdateUserData,
  getUpdateStudentPassword,
  getUpdateUserSocialLink,
} from "redux/actions/editStudentActions";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import Alert from "components/shared/Alert/Alert";
import Loader from "components/shared/Loader/Loader";
import { facebookLink, twitterLink, instagramLink, githubLink } from "constants/regExp";
import Async from "components/shared/Async/Async";
class StudentProfileEdit extends PureComponent {
  passwordRef = React.createRef();
  editStudentData = React.createRef();
  studentSocial = React.createRef();
  socialObj = {
    FACEBOOK: "",
    GITHUB: "",
    INSTAGRAM: "",
    TWITTER: "",
  };
  updateStudentData = (values) => {
    const dateFormat = {
      day: +values.dob.format("DD"),
      month: +values.dob.format("MM"),
      year: +values.dob.format("YYYY"),
    };
    const dob = {
      upsert: {
        create: {
          ...dateFormat,
        },
        update: {
          ...dateFormat,
        },
      },
    };
    const updatedUser = {
      ...values,
      dob,
      education: {
        set: values.education,
      },
    };
    this.props.getUpdateUserData(updatedUser);
  };
  updateStudentPassword = (values) => {
    const updatedPassword = {
      oldPassword: values.password,
      newPassword: values.newPassword,
    };
    this.props.getUpdateStudentPassword(updatedPassword);
  };
  updateStudentSocialLinks = (values) => {
    const links = this.props.editStudent.curUser.socialLinks;
    const socailLinks = ["FACEBOOK", "TWITTER", "INSTAGRAM", "GITHUB"];
    const socailIdentify = [false, false, false, false];
    let updateCreateSocialLinks = [];
    if (links.length > 0) {
      socailLinks.forEach((el, index) => {
        const link = links
          .map((curr) => {
            if (el === curr.type) {
              socailIdentify[index] = true;
              return {
                where: { id: curr.id },
                update: {
                  link: values[el] !== "" && values[el] !== undefined ? values[el] : "#",
                  type: curr.type,
                },
                create: {
                  link: values[el] !== "" && values[el] !== undefined ? values[el] : "#",
                  type: curr.type,
                },
              };
            }
            return null;
          })
          .filter((cur) => cur !== null);
        updateCreateSocialLinks = updateCreateSocialLinks.concat(link);
      });
    }
    socailIdentify.forEach((el, index) => {
      if (!el) {
        const link = {
          where: { id: "" },
          update: {
            link:
              values[socailLinks[index]] !== "" && values[socailLinks[index]] !== undefined
                ? values[socailLinks[index]]
                : "#",
            type: socailLinks[index],
          },
          create: {
            link:
              values[socailLinks[index]] !== "" && values[socailLinks[index]] !== undefined
                ? values[socailLinks[index]]
                : "#",
            type: socailLinks[index],
          },
        };
        updateCreateSocialLinks = updateCreateSocialLinks.concat(link);
      }
    });
    const updatedSocialLinks = {
      socialLinks: {
        upsert: updateCreateSocialLinks,
      },
    };
    this.props.getUpdateUserSocialLink(updatedSocialLinks);
  };
  componentDidMount() {
    this.props.getCurrentUserData();
  }
  componentDidUpdate(preProps) {
    if (
      this.props.editStudent.uiStateUpdatingStudent === SUCCESS &&
      this.props.editStudent.uiStateUpdatingStudent !== preProps.editStudent.uiStateUpdatingStudent
    ) {
      message.success("Student Data Updated");
      this.editStudentData.current.setFieldsValue({
        ...this.props.editStudent.curUser,
      });
    }
    if (
      this.props.editStudent.uiStateUpdatingStudentPassword === SUCCESS &&
      this.props.editStudent.uiStateUpdatingStudentPassword !==
        preProps.editStudent.uiStateUpdatingStudentPassword
    ) {
      message.success("Student Password Updated");
      this.passwordRef.current.setFieldsValue({
        password: this.props.editStudent.curUser.password,
        newPassword: "",
        confirmPassword: "",
      });
    }
    if (
      this.props.editStudent.uiStateUpdatingStudentSocial === SUCCESS &&
      this.props.editStudent.uiStateUpdatingStudentSocial !==
        preProps.editStudent.uiStateUpdatingStudentSocial
    ) {
      this.socialObj = this.props.editStudent.curUser.socialLinks.reduce((obj, cur, index) => {
        obj[cur.type] = cur.link;
        return obj;
      }, {});
      message.success("Student Social links Updated");
      this.studentSocial.current.setFieldsValue({
        FACEBOOK: this.socialObj.FACEBOOK !== "#" ? this.socialObj.FACEBOOK : "",
        GITHUB: this.socialObj.GITHUB !== "#" ? this.socialObj.GITHUB : "",
        INSTAGRAM: this.socialObj.INSTAGRAM !== "#" ? this.socialObj.INSTAGRAM : "",
        TWITTER: this.socialObj.TWITTER !== "#" ? this.socialObj.TWITTER : "",
      });
    }
  }
  render() {
    const label = (name) => <h3 className="label">{name}:</h3>;
    const { Option } = Select;
    const {
      uiState,
      error,
      uiStateUpdatingStudent,
      uiStateUpdatingStudentSocial,
      uiStateUpdatingStudentPassword,
    } = this.props.editStudent;
    const { password } = this.props.editStudent.curUser;
    if (this.props.editStudent.curUser.socialLinks) {
      this.socialObj = this.props.editStudent.curUser.socialLinks.reduce((obj, cur, index) => {
        obj[cur.type] = cur.link !== "#" ? cur.link : "";
        return obj;
      }, {});
    }
    return (
      <Async
        uiState={uiState}
        error={error}
        onSuccess={() => {
          return (
            <Container>
              <div className="student-profile-edit-wrapped">
                <StudentFormDesign
                  title="Basic Information"
                  content="Edit your account details and settings.">
                  <div className="student-profile-form">
                    <Form
                      className="student-profile-form-setting"
                      layout="vertical"
                      name="edit_student_data"
                      ref={this.editStudentData}
                      initialValues={this.props.editStudent.curUser}
                      onFinish={this.updateStudentData}>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item label={label("full name")} name="name">
                            <Input placeholder="enter your full name" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item label={label("phone no")} name="phone">
                            <Input placeholder="enter your phone no" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item label={label("address")} name="address">
                            <Input placeholder="enter your address" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.List name="education">
                            {(fields, { add, remove }) => {
                              return (
                                <div>
                                  <Form.Item
                                    label={label("education")}
                                    style={{ marginBottom: "-2rem" }}
                                  />
                                  {fields.map((field, index) => (
                                    <Form.Item required={false} key={field.key}>
                                      <Form.Item
                                        {...field}
                                        validateTrigger={["onChange", "onBlur"]}
                                        rules={[
                                          {
                                            required: true,
                                            whitespace: true,
                                            message: "Please input your education.",
                                          },
                                        ]}
                                        noStyle>
                                        <Input
                                          placeholder="Enter your Education"
                                          style={{ width: "85%" }}
                                        />
                                      </Form.Item>
                                      <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        style={{ margin: "0 8px" }}
                                        onClick={() => {
                                          remove(field.name);
                                        }}
                                      />
                                    </Form.Item>
                                  ))}
                                  <Form.Item>
                                    <Button
                                      type="dashed"
                                      onClick={() => {
                                        add();
                                      }}
                                      style={{ width: "85%" }}>
                                      <PlusOutlined /> Add Education
                                    </Button>
                                  </Form.Item>
                                </div>
                              );
                            }}
                          </Form.List>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item label={label("gender")} name="gender">
                            <Select onChange={(val) => this.setState({ male: val })}>
                              <Option value="MALE">Male</Option>
                              <Option value="FEMALE">Female</Option>
                              <Option value="OTHER">Other</Option>
                            </Select>
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item label={label("Date of Birthday")} name="dob">
                            <DatePicker style={{ width: "100%" }} format="DD-MM-YYYY" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item label={label("BIO / DESCRIPTION")} name="bio">
                            <Input.TextArea
                              rows={6}
                              placeholder="enter bio-data"
                              style={{ resize: "none" }}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <div className="btn">
                            <Form.Item>
                              <Button
                                type="primary"
                                htmlType="submit"
                                loading={uiStateUpdatingStudent === IN_PROGRESS ? true : false}
                                disabled={uiStateUpdatingStudent === IN_PROGRESS ? true : false}>
                                Save
                              </Button>
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </StudentFormDesign>
              </div>
              <div className="student-profile-edit-wrapped">
                <StudentFormDesign title="Update Your Password" content="Change your password">
                  <div className="student-profile-form">
                    <Form
                      className="student-profile-form-setting"
                      layout="vertical"
                      name="edit_student-password"
                      ref={this.passwordRef}
                      initialValues={this.props.editStudent.curUser}
                      onFinish={this.updateStudentPassword}>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item
                            label={label("old password")}
                            name="password"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please input your old Password!",
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (!value || password === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(
                                    "your old password that you entered do not match!"
                                  );
                                },
                              }),
                            ]}>
                            <Input.Password placeholder="old Password" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item
                            label={label("New password")}
                            name="newPassword"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please input your new Password!",
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (value.length >= 8) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(
                                    "plz enter the long password greater or equal then 8 character"
                                  );
                                },
                              }),
                            ]}>
                            <Input.Password placeholder="new Password" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item
                            label={label("Confirm password")}
                            name="confirmPassword"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please confirm your password!",
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (!value || getFieldValue("newPassword") === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(
                                    "The two passwords that you entered do not match!"
                                  );
                                },
                              }),
                            ]}>
                            <Input.Password placeholder="confirm Password" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <div className="btn">
                            <Form.Item>
                              <Button
                                type="primary"
                                htmlType="submit"
                                loading={
                                  uiStateUpdatingStudentPassword === IN_PROGRESS ? true : false
                                }
                                disabled={
                                  uiStateUpdatingStudentPassword === IN_PROGRESS ? true : false
                                }>
                                Save
                              </Button>
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </StudentFormDesign>
              </div>
              <div className="student-profile-edit-wrapped">
                <StudentFormDesign
                  name="edit_student-social-links"
                  title="Social Link Settings"
                  content="Update your public Social Links">
                  <div className="student-profile-form">
                    <Form
                      className="student-profile-form-setting"
                      layout="vertical"
                      onFinish={this.updateStudentSocialLinks}
                      ref={this.studentSocial}
                      initialValues={this.socialObj}
                      name="edit-student-social-links">
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item
                            label={label("Social links")}
                            name="FACEBOOK"
                            hasFeedback
                            rules={[
                              {
                                required: false,
                                // message: "Please confirm your password!",
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (facebookLink.test(value)) {
                                    facebookLink.lastIndex = 0;
                                    return Promise.resolve();
                                  }
                                  if (!value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject("enter the correct url");
                                },
                              }),
                            ]}>
                            <Input
                              placeholder="Enter your Facebook link"
                              className="icon-setting"
                              prefix={<FacebookFilled className="color-fb" />}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item
                            name="INSTAGRAM"
                            hasFeedback
                            rules={[
                              {
                                required: false,
                                // message: "Please confirm your password!",
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (instagramLink.test(value)) {
                                    instagramLink.lastIndex = 0;
                                    return Promise.resolve();
                                  }
                                  if (!value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject("enter the correct url");
                                },
                              }),
                            ]}>
                            <Input
                              className="icon-setting"
                              placeholder="Enter your Instagram link"
                              prefix={<InstagramFilled className="color-insta" />}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item
                            name="TWITTER"
                            hasFeedback
                            rules={[
                              {
                                required: false,
                                // message: "Please confirm your password!",
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (twitterLink.test(value)) {
                                    twitterLink.lastIndex = 0;
                                    return Promise.resolve();
                                  }
                                  if (!value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject("enter the correct url");
                                },
                              }),
                            ]}>
                            <Input
                              placeholder="Enter your Twitter link"
                              className="icon-setting"
                              prefix={<TwitterSquareFilled className="color-tw" />}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <Form.Item
                            name="GITHUB"
                            hasFeedback
                            rules={[
                              {
                                required: false,
                                // message: "Please confirm your password!",
                              },
                              ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (githubLink.test(value)) {
                                    githubLink.lastIndex = 0;
                                    return Promise.resolve();
                                  }
                                  if (!value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject("enter the correct url");
                                },
                              }),
                            ]}>
                            <Input
                              placeholder="Enter your github link"
                              className="icon-setting"
                              prefix={<GithubOutlined />}
                            />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="grouped">
                        <div className="group-form">
                          <div className="btn">
                            <Form.Item>
                              <Button
                                type="primary"
                                htmlType="submit"
                                loading={
                                  uiStateUpdatingStudentSocial === IN_PROGRESS ? true : false
                                }
                                disabled={
                                  uiStateUpdatingStudentSocial === IN_PROGRESS ? true : false
                                }>
                                Save
                              </Button>
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </StudentFormDesign>
              </div>
              {(uiStateUpdatingStudent === FAILED ||
                uiStateUpdatingStudentPassword === FAILED ||
                uiStateUpdatingStudentSocial === FAILED) && (
                <Alert message={error} type="error" showIcon />
              )}
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
  getUpdateUserData,
  getUpdateStudentPassword,
  getUpdateUserSocialLink,
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentProfileEdit);
