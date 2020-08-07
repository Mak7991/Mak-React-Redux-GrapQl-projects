import React from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { setNewPassword } from "redux/actions/loginActions";
import Alert from "components/shared/Alert/Alert";

import queryString from "query-string";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

import "components/SetPassword/SetPassword.scss";
import { Redirect } from "react-router-dom";

function SetPassword(props) {
  const onFinish = async (values) => {
    const { id } = queryString.parse(window.location.search);
    const response = await props.setNewPassword(id, values.password);
  };
  const { setPasswordButtonUiState, error } = props.login;
  if (setPasswordButtonUiState === SUCCESS) {
    return <Redirect to="/auth/login" />;
  }
  return (
    <div className="set-password">
      <div className="set-password-body">
        <div className="set-password-title">
          <h1>Set your new password</h1>
        </div>
        <Form name="set_password" onFinish={onFinish}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your email!" }]}>
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="retype_password"
            rules={[{ required: true, message: "Please input your email!" }]}>
            <Input prefix={<LockOutlined />} type="password" placeholder="Conform password" />
          </Form.Item>
          <div className="submit-button">
            <Button
              loading={setPasswordButtonUiState === IN_PROGRESS ? true : false}
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Set Password
            </Button>
          </div>
        </Form>
      </div>
      {setPasswordButtonUiState === FAILED && <Alert message={error} type="error" showIcon />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = {
  setNewPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SetPassword);
