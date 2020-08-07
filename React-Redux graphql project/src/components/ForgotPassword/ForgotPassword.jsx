import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

import { setForgotPassword } from "redux/actions/loginActions";

import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import Alert from "components/shared/Alert/Alert";

import "components/ForgotPassword/ForgotPassword.scss";

function ForgotPassword(props) {
  const onFinish = async (values) => {
    const response = await props.setForgotPassword(values.email);
  };

  const { forgotPasswordButtonUiState, error } = props.login;
  return (
    <div className="forgot-password">
      <div className="forgot-password-body">
        <div className="forgot-password-title">
          <h1>Reset your password</h1>
        </div>
        <Form name="forgot_password" onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: "Please input your email!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <div className="submit-button">
            <Button
              loading={forgotPasswordButtonUiState === IN_PROGRESS ? true : false}
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Send Reset Email
            </Button>
          </div>
        </Form>
      </div>
      {forgotPasswordButtonUiState === FAILED && <Alert message={error} type="error" showIcon />}
      {forgotPasswordButtonUiState === SUCCESS && (
        <Alert
          message={
            "We have sent a password reset email to you, if you didn't received the email please try again after a while"
          }
          type="error"
          showIcon
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = {
  setForgotPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
