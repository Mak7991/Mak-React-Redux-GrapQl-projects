import React from "react";
import Container from "components/shared/Container/Container";
import AnalyticsCard from "components/AnalyticsCard/AnalyticsCard";
import { Avatar } from "antd";
import "./AdminAnalytics.scss";

function AdminAnalytics() {
  return (
    <Container>
      <div className="analytics-card-row">
        <AnalyticsCard title="Present Students" value="200" />
        <AnalyticsCard title="Absent Students" value="200" />
        <AnalyticsCard title="Online Students" value="200" />
      </div>
      <div>
        <div className="ongoing-class-wrapper">
          <div className="ongoing-class">
            <div className="ongoing-class-title-bar">
              <Avatar
                style={{ background: "#1890ff" }}
                size={70}
                icon={
                  <div style={{ height: "60%", width: "60%", margin: "-5% auto" }}>
                    <img
                      style={{ width: "100%", height: "auto" }}
                      src={require("assets/icons/teacher.png")}
                    />
                  </div>
                }
              />
              <h1>Ongoing Classes</h1>
            </div>

            <div className="admin-class-card-wrapper">
              <div className="admin-class-card">
                <div className="class-title">
                  <h3>Software Defined Architecture</h3>
                </div>
                <div className="instructor-name">
                  <span>Instructor: </span>
                  <span>Gandhi</span>
                </div>
                <div>
                  <span>Online</span>
                  <span>90</span>
                </div>
                <div>
                  <span>Onsite</span>
                  <span>100</span>
                </div>
                <div>
                  <span>Absent</span>
                  <span>2</span>
                </div>
              </div>
              <div className="admin-class-card">
                <div className="class-title">
                  <h3>Software Defined Architecture</h3>
                </div>
                <div className="instructor-name">
                  <span>Instructor: </span>
                  <span>Gandhi</span>
                </div>
                <div>
                  <span>Online</span>
                  <span>90</span>
                </div>
                <div>
                  <span>Onsite</span>
                  <span>100</span>
                </div>
                <div>
                  <span>Absent</span>
                  <span>2</span>
                </div>
              </div>
              <div className="admin-class-card">
                <div className="class-title">
                  <h3>Software Defined Architecture</h3>
                </div>
                <div className="instructor-name">
                  <span>Instructor: </span>
                  <span>Gandhi</span>
                </div>
                <div>
                  <span>Online</span>
                  <span>90</span>
                </div>
                <div>
                  <span>Onsite</span>
                  <span>100</span>
                </div>
                <div>
                  <span>Absent</span>
                  <span>2</span>
                </div>
              </div>
              <div className="admin-class-card">
                <div className="class-title">
                  <h3>Software Defined Architecture</h3>
                </div>
                <div className="instructor-name">
                  <span>Instructor: </span>
                  <span>Gandhi</span>
                </div>
                <div>
                  <span>Online</span>
                  <span>90</span>
                </div>
                <div>
                  <span>Onsite</span>
                  <span>100</span>
                </div>
                <div>
                  <span>Absent</span>
                  <span>2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AdminAnalytics;
