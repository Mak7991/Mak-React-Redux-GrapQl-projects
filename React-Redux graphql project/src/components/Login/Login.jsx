import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

import { Link, Redirect } from "react-router-dom";
import "components/Login/Login.scss";

import { userLogin } from "redux/actions/loginActions";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import Alert from "components/shared/Alert/Alert";

class Login extends React.Component {
  onFinish = async values => {
    const response = await this.props.userLogin(values.email, values.password);
  };

  render() {
    const { loginButtonUiState, error } = this.props.login;
    if (loginButtonUiState === SUCCESS) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <div className="login-body">
          <div className="login-title">
            <h1>Log in to you account</h1>
          </div>
          <Form name="normal_login" initialValues={{ remember: true }} onFinish={this.onFinish}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}>
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your Password!" }]}>
              <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <div className="remember-me-box">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link className="login-form-forgot" to="/auth/forgot-password">
                  Forgot password
                </Link>
              </div>
            </Form.Item>

            <div className="submit-button">
              <Button
                loading={loginButtonUiState === IN_PROGRESS ? true : false}
                type="primary"
                htmlType="submit"
                className="login-form-button">
                Log in
              </Button>
            </div>
          </Form>
        </div>
        {loginButtonUiState === FAILED && <Alert message={error} type="error" showIcon />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = {
  userLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
