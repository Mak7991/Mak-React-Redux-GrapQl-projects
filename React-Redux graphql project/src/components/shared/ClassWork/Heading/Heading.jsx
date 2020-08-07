import React from "react";
import { Divider } from "antd";
import "components/shared/ClassWork/Heading/Heading.scss";
const Heading = (props) => {
  return (
    <div className="heading">
      <div className="heading-position">
        <h2 className="heading-style">{props.title}</h2>
      </div>
      <div className="heading-line-position">
        <hr className="heading-line-color" />
      </div>
    </div>
  );
};

export default Heading;
