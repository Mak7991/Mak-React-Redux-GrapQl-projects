import React, { Component } from "react";
import {
  Table,
  Tag,
  Input,
  Button,
  Tabs,
  Drawer,
  Form,
  InputNumber,
  Dropdown,
  Menu,
  message,
} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import Container from "components/shared/Container/Container";
import "./AdminClassrooms.scss";
import { connect } from "react-redux";
import { getAdminClassrooms, createAdminClassrooms } from "redux/actions/adminClassrooms";
import Async from "components/shared/Async/Async";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
import Alert from "components/shared/Alert/Alert";
const { TabPane } = Tabs;

function handleDetailsClick(e) {
  message.info("Details of Classroom.");
  console.log("details", e);
}

function handleDisableClick(e) {
  message.info("Disable Classroom.");
  console.log("Disable Student", e);
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
    title: "Subject",
    dataIndex: "subject",
    key: "subject",
  },
  {
    title: "Section",
    dataIndex: "section",
    key: "section",
  },
  {
    title: "Room",
    dataIndex: "room",
    key: "room",
  },
  {
    title: "",
    key: "action",
    render: (text, record) => (
      <div id="components-dropdown-demo-dropdown-button">
        <Dropdown placement="bottomRight" overlay={menu} className="table-options">
          {<EllipsisOutlined className="dots" />}
        </Dropdown>
      </div>
    ),
  },
];
// ];
// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// const validateMessages = {
//   required: "{label} is required!",
//   types: {
//     name: "${label} is not validate name!",
//     subject: "${label} is not a validate subject!",
//     section: "${label} is not a validate section!",
//     room: "${label} is not a validate room!",
//   },
// };

export class AdminClassrooms extends Component {
  state = {
    visible: false,
  };
  componentDidMount() {
    this.props.getAdminClassrooms("ckc3smazi00160749zubtgx7l");
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
    console.log(values);
    console.log({ ...values.classroom, password: "admin123" });
    this.props.createAdminClassrooms({
      data: { ...values.classrooms, password: "admin123" },
      where: {
        id: "ckc3smazi00160749zubtgx7l",
      },
    });
  };
  render() {
    const {
      uiState,
      error,
      uiStateCreateClassroom,
      errorCreateClassroom,
    } = this.props.adminClassrooms;
    const data = this.props.adminClassrooms.classrooms.map(classroom => {
      // console.log(classroom);
      return {
        key: classroom.id,
        name: classroom.name,
        subject: classroom.subject,
        section: classroom.section,
        room: classroom.room,
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
                  Add Classrooms
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
                    <TabPane tab="All Classrooms" key="1">
                      <div>
                        <Table columns={columns} dataSource={data} />
                      </div>
                    </TabPane>
                    <TabPane tab="Active Classrooms" key="2">
                      <div>
                        <Table columns={columns} dataSource={data} />
                      </div>
                    </TabPane>
                    <TabPane tab="Disabled Classrooms" key="3">
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
          title="Add New Class"
          placement="right"
          onClose={this.onClose}
          visible={this.state.visible}
          width="40%">
          <Form layout="vertical" name="nest-messages" onFinish={this.onFinish}>
            <Form.Item
              name={["classroom", "name"]}
              label="Name"
              rules={[{ type: "string", required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["classroom", "subject"]}
              label="Subject"
              rules={[{ type: "string", required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["classroom", "section"]}
              label="Section"
              rules={[{ type: "string", required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={["classroom", "room"]}
              label="Room"
              rules={[{ type: "string", required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Add
              </Button>
            </Form.Item>
          </Form>
          {uiStateCreateClassroom === FAILED && (
            <Alert message={errorCreateClassroom.message} type="error" showIcon />
          )}
        </Drawer>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    adminClassrooms: state.adminClassrooms,
  };
};
const mapDispatchToProps = {
  getAdminClassrooms,
  createAdminClassrooms,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminClassrooms);
