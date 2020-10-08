import React from "react";
import { MobileOutlined, MailOutlined, HomeOutlined } from "@ant-design/icons";
import "./UserDetail.scss";

const UserDeatail = () => {
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
            
        </div>
      </div>
    </div>
  );
};

export default UserDeatail;
