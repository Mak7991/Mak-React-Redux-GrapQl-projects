import React, { Component } from "react";
import Container from "components/shared/Container/Container";
import "components/shared/ClassWork/ClassWork.scss";
import Heading from "components/shared/ClassWork/Heading/Heading";
import SideBar from "components/shared/ClassWork/SideBar/SideBar";
import ClassroomPost from "components/ClassroomPost/ClassroomPost";
import { Input } from "antd";
class ClassWork extends Component {
  state = {
    items: ["all topics", "react", "react-native", "javascript", "java", "python"],
    activeKey: "all topics",
    itemsList: [
      {
        subject: "react",
        postType: "assignment",
        name: "Ali Khan",
        postName: "Pre Mid Assignment 2",
      },
      {
        subject: "react",
        postType: "assignment",
        name: "Ali Khan",
        postName: "Pre Mid Assignment 2",
      },
      {
        subject: "react-native",
        postType: "assignment",
        name: "Ali Khan",
        postName: "Pre Mid Assignment 2",
      },
      {
        subject: "react-native",
        postType: "assignment",
        name: "Ali Khan",
        postName: "Pre Mid Assignment 2",
      },
      {
        subject: "javascript",
        postType: "assignment",
        name: "Ali Khan",
        postName: "Pre Mid Assignment 2",
      },
      {
        subject: "javascript",
        postType: "assignment",
        name: "Ali Khan",
        postName: "Pre Mid Assignment 2",
      },
      {
        subject: "java",
        postType: "assignment",
        name: "Ali Khan",
        postName: "Pre Mid Assignment 2",
      },
      {
        subject: "java",
        postType: "assignment",
        name: "Ali Khan",
        postName: "Pre Mid Assignment 2",
      },
      {
        subject: "python",
        postType: "assignment",
        name: "Ali Khan",
        postName: "Pre Mid Assignment 2",
      },
    ],
    itemRender: null,
    inputText: "",
  };
  selectHandler = (activeKey) => {
    let { itemsList, itemRender } = { ...this.state };
    this.setState({
      activeKey,
    });
    itemRender = this.returnItemList(itemsList);
    if (activeKey !== "all topics") {
      itemRender = itemsList.filter((el) => el.subject.toLowerCase().includes(activeKey));
      itemRender = this.returnItemList(itemRender);
    }
    this.setState({
      itemRender,
    });
  };

  inputTextHandler = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };
  searchHandler = () => {
    let { itemsList, itemRender, inputText } = { ...this.state };
    itemRender = this.returnItemList(itemsList);
    if (inputText) {
      itemRender = itemsList.filter((el) => el.subject.toLowerCase().startsWith(inputText));
      itemRender = this.returnItemList(itemRender);
    }
    this.setState({
      itemRender,
      // inputText: "",
    });
  };
  componentDidMount() {
    this.setState((prevState) => {
      return {
        itemRender: this.returnItemList(prevState.itemsList),
      };
    });
  }
  returnItemList = (items) => {
    return items.map((el, index) => (
      <div className="classwork-assignment-item" key={index}>
        <div className="classwork-assignment-item-color"></div>
        <ClassroomPost
          data={{
            subject: el.subject,
            postType: el.postType,
            name: el.name,
            postName: el.postName,
          }}
        />
      </div>
    ));
  };
  render() {
    const { Search } = Input;
    const { items, activeKey, itemRender } = this.state;

    return (
      <Container>
        <div className="wrapper">
          <div className="classwork-heading">
            <Heading title="React" />
          </div>
          <div className="classwork-wrapper">
            <div className="classwork-side-item">
              <SideBar clicked={this.selectHandler} items={items} activeKey={activeKey} />
            </div>
            <div className="classwork-assignment-wrapper">
              <div className="classwork-search-bar">
                <Search
                  placeholder="search assignment"
                  onSearch={this.searchHandler}
                  value={this.state.inputText}
                  onPressEnter={this.searchHandler}
                  onChange={(e) => this.inputTextHandler(e)}
                  enterButton
                />
              </div>
              {itemRender}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
export default ClassWork;
