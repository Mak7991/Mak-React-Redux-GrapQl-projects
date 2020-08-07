import React from "react";
import { Row, Col } from "antd";

function Container(props) {
  const { children } = props;
  return (
    <Row>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={20}
        xl={18}
        xxl={18}
        style={{ margin: "0 auto", padding: "15px 15px", position: "relative" }}>
        {children}
      </Col>
    </Row>
  );
}

export default Container;
