import Header from "components/shared/Header/Header";
import React from "react";
// import ant from "antd";
// import { Container } from "react-bootstrap";
import "./GoalPanel.scss";

function GoalPanel() {
  return (
    <>
      <Header />
      <div className="ant-row-flex ant-row-flex-space-between flex-container">
        <div className="detail-panel">
          <div className="user-detail">
            <div>
                <h5>Your Advisor</h5>
                <h1>RoboCap Advisors</h1>
                
            </div>
          </div>
          <div className="assets-detail"></div>
        </div>
      </div>
    </>
  );
}

export default GoalPanel;
