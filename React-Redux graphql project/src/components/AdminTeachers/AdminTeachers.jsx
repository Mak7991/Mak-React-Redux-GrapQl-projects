import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Tag, Input, Button, Tabs, Drawer, Form, Dropdown, Menu, message } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import Container from "components/shared/Container/Container";
import { getAdminTeachers, createAdminTeacher } from "redux/actions/adminTeacher";
import "./AdminTeachers.scss";
import Async from "components/shared/Async/Async";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import Alert from "components/shared/Alert/Alert";
const { TabPane } = Tabs;

function handleInviteClick(e) {
  message.info("Invite Teacher.");
}

function handleDisableClick(e) {
  message.info("Disable Teacher.");
}

const menu = (
  <Menu>
    <Menu.Item key="1" onClick={handleInviteClick}>
      Invite
    </Menu.Item>
    <Menu.Item key="2" onClick={handleDisableClick}>
      Disable
    </Menu.Item>
  </Menu>
);

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "",
    key: "action",
    render: () => (
      <div id="components-dropdown-demo-dropdown-button">
        <Dropdown placement="bottomRight" overlay={menu} className="table-options">
          {<EllipsisOutlined className="dots" />}
        </Dropdown>
      </div>
    ),
  },
];

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export class AdminTeachers extends Component {
  state = {
    visible: false,
  };
  componentDidMount() {
    this.props.getAdminTeachers("ckc3smazi00160749zubtgx7l");
  }
  onClose = () => {
    this.setState({ visible: false });
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onFinish = values => {
    this.props.createAdminTeacher({
      data: { ...values.teacher, password: "teacher123" },
      where: {
        id: "ckc3smazi00160749zubtgx7l",
      },
    });
  };
  render() {
    const { uiState, error, uiStateCreateTeacher, errorCreateTeacher } = this.props.adminTeachers;
    const data = this.props.adminTeachers.teachers.map(teacher => {
      // console.log(teacher);
      return {
        key: teacher.id,
        name: teacher.name,
        email: teacher.email,
        address: teacher.address,
        gender: teacher.gender,
        // tags: ["Good", "Developer"],
      };
    });
    return (
      <>
        <Container>
          <div className="serach-input-wrapper">
            <div className="serach-input">
              <div className="serach-input-controll">
                <Input.Search
                  placeholder="input search text"
                  enterButton
                  size="large"
                  onSearch={value => console.log(value)}
                />
              </div>
              <div className="serach-input-add-user">
                <Button onClick={this.showDrawer} type="primary">
                  Add Teacher
                </Button>
              </div>
            </div>
          </div>
          <Async
            uiState={uiState}
            error={error}
            onSuccess={() => {
              return (
                <div className="admin-user-table-wrapper">
                  <Tabs defaultActiveKey="1" onChange={e => console.log(e)}>
                    <TabPane tab="All Teachers" key="1">
                      <div>
                        <Table columns={columns} dataSource={data} />
                      </div>
                    </TabPane>
                    <TabPane tab="Disabled Teachers" key="3">
                      <div>
                        <Table columns={columns} dataSource={data} />
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              );
            }}
          />
        </Container>
        <Drawer
          title="Add new teacher"
          placement="right"
          onClose={this.onClose}
          visible={this.state.visible}
          width="40%">
          <Form
            layout="vertical"
            name="nest-messages"
            onFinish={this.onFinish}
            validateMessages={validateMessages}>
            <Form.Item name={["teacher", "name"]} label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["teacher", "email"]}
              label="Email"
              rules={[{ type: "email", required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["teacher", "phone"]}
              label="Phone number"
              rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Add
              </Button>
            </Form.Item>
          </Form>
          {uiStateCreateTeacher === FAILED && (
            <Alert message={errorCreateTeacher.message} type="error" showIcon />
          )}
        </Drawer>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    adminTeachers: state.adminTeachers,
  };
};
const mapDispatchToProps = {
  getAdminTeachers,
  createAdminTeacher,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminTeachers);
