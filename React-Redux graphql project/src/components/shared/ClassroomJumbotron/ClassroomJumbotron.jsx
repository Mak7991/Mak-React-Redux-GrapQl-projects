import React, { Component } from "react";
import { Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./ClassroomJumbotron.scss";
export class ClassroomJumbotron extends Component {
  state = {
    isdropdownActive: false,
  };
  handleDropdown = () => {
    const { isdropdownActive } = this.state;
    this.setState({ isdropdownActive: !isdropdownActive });
  };
  render() {
    const { isdropdownActive } = this.state;
    const { subject, section, room, coverPhoto, name } = this.props.data;
    return (
      <div className="classroom-feed-jumbotron-wrapper">
        <div className="classroom-feed-jumbotron">
          <div
            className="classroom-feed-jumbotron-img"
            style={{
              background:
                coverPhoto !== null
                  ? `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.3)), url(${coverPhoto})`
                  : `linear-gradient(rgba(93, 136, 61, 0.6), #dcd027)`,
            }}>
            <h1>{name}</h1>
            <Button
              size="large"
              onClick={() => this.handleDropdown()}
              shape="circle"
              ghost
              className="jumbotron-feed-button">
              {isdropdownActive ? <UpOutlined /> : <DownOutlined />}
            </Button>
          </div>
          {isdropdownActive && (
            <div className="classroom-feed-jumbotron-description">
              <div className="classroom-feed-jumbotron-description-items">
                {subject && (
                  <div className="classroom-feed-jumbotron-description-item">
                    <h3>Subject:</h3>
                    <p>{subject}</p>
                  </div>
                )}
                {section && (
                  <div className="classroom-feed-jumbotron-description-item">
                    <h3>Section:</h3>
                    <p>{section}</p>
                  </div>
                )}
                {room && (
                  <div className="classroom-feed-jumbotron-description-item">
                    <h3>Room:</h3>
                    <p>{room}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default ClassroomJumbotron;
