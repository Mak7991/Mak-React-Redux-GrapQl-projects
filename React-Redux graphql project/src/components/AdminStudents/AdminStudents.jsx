import React, { Component } from "react";
import { Table, Tag, Input, Button, Tabs, Drawer, Form, Dropdown, Menu, message } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import Container from "components/shared/Container/Container";
import "./AdminStudents.scss";
import { getAdminStudents, createAdminStudent } from "redux/actions/adminStudents";
import Async from "components/shared/Async/Async";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import Alert from "components/shared/Alert/Alert";
const { TabPane } = Tabs;

function handleDetailsClick(e) {
  message.info("Details of Students.");
}

function handleDisableClick(e) {
  message.info("Disable Student.");
}

const menu = (
  <Menu>
    <Menu.Item key="1" onClick={handleDetailsClick}>
      Details
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

export class AdminStudents extends Component {
  state = {
    visible: false,
  };
  componentDidMount() {
    this.props.getAdminStudents("ckc3smazi00160749zubtgx7l");
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
    this.props.createAdminStudent({
      data: { ...values.student, password: "admin123" },
      where: {
        id: "ckc3smazi00160749zubtgx7l",
      },
    });
  };
  render() {
    const { uiState, error, uiStateCreateStudent, errorCreateStudent } = this.props.adminStudents;
    const data = this.props.adminStudents.students.map(student => {
      return {
        key: student.id,
        name: student.name,
        email: student.email,
        address: student.address,
        gender: student.gender,
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
                  Add Student
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
                    <TabPane tab="All Students" key="1">
                      <div>
                        <Table columns={columns} dataSource={data} />
                      </div>
                    </TabPane>
                    <TabPane tab="Disabled Students" key="3">
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
          title="Add new student"
          placement="right"
          onClose={this.onClose}
          visible={this.state.visible}
          width="40%">
          <Form
            layout="vertical"
            name="nest-messages"
            onFinish={this.onFinish}
            validateMessages={validateMessages}>
            <Form.Item name={["student", "name"]} label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["student", "email"]}
              label="Email"
              rules={[{ type: "email", required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["student", "phone"]}
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
          {uiStateCreateStudent === FAILED && (
            <Alert message={errorCreateStudent.message} type="error" showIcon />
          )}
        </Drawer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminStudents: state.adminStudents,
  };
};
const mapDispatchToProps = {
  getAdminStudents,
  createAdminStudent,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminStudents);
