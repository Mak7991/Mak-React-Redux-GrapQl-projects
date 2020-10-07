import * as React from "react";
import { Alert as AntdAlert } from "antd";
import "components/shared/Alert/Alert.scss";

const Alert = (props) => {
  return (
    <div className="custom-alert">
      <AntdAlert {...props} />
    </div>
  );
};

export default Alert;
