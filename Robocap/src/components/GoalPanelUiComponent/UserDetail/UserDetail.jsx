import React from "react";
import { Link } from "react-router-dom";
import { MobileOutlined, MailOutlined, HomeOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import "./UserDetail.scss";

const UserDetail = () => {
  return (
    <div className="detail-panel">
      <div className="sub-detail-panel">
        <div className="user-detail">
          <div>
            <h5>Your Advisor</h5>
            <h1>RoboCap Advisors</h1>
            <div className="contact">
              <MobileOutlined /> <p>00923219218890</p>
            </div>
            <div className="email">
              <MailOutlined /> <p>ehteshamakhan@gmail.com</p>
            </div>
            <div className="address">
              <HomeOutlined />
              <p>
                3rd Floor, Building #10-C, Lane-9, Ittehad Commercial, DHA,Karachi,Pakistan,
                Karachi, Sindh 75500, Pakistan
              </p>
            </div>
          </div>
        </div>
        <div className="assets-detail">
          <div className="total-values">
            <div className="new-account">
              <Link to="/newaccount" className="new-account-btn">
                <i className="btn-icon">
                  <PlusOutlined style={{ color: "#fff", width: "20px" }} />
                </i>
                <span>Open a new account</span>
              </Link>
            </div>
            <div className="user-assets-detail">
              <Row>
                <img
                  src={require("../../../assets/images/wallet.png")}
                  alt="wallet"
                  className="icon"
                />
                <Col>
                  <h5>Total Net Worth (3 Accounts)</h5>
                  <p>$553,706.67</p>
                </Col>
              </Row>
            </div>
            <div className="user-assets-detail">
              <Row>
                <img
                  src={require("../../../assets/images/assets.png")}
                  alt="wallet"
                  className="icon"
                />
                <Col>
                  <h5>Total Managed Assets (1 Account)</h5>
                  <p>$53,706.67</p>
                </Col>
              </Row>
            </div>
            <div className="user-assets-detail">
              <Row>
                <img src={require("../../../assets/images/link.png")} alt="wallet" className="icon" />
                <Col>
                  <h5>
                    Held-away Net Worth <Link to="/Accounts">(2 Accounts)</Link>
                  </h5>
                  <p>$500,000.00</p>
                </Col>
              </Row>
            </div>
            <div className="user-assets-detail">
              <Row>
                <img
                  src={require("../../../assets/images/earning.png")}
                  alt="wallet"
                  className="icon"
                />
                <Col>
                  <h5>Total Earnings</h5>
                  <p>-$45,295.98</p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
