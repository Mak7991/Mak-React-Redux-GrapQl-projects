import React from "react";
import { Alert } from "antd";
import "components/Notifications/NotifyError/NotifyError.scss";
const NotifyError = (props) => {
  return (
    <div className="notify-fail">
      <Alert
        className="notify-fail-text"
        message="Network Error:"
        description={props.error}
        type="error"
        showIcon
      />
    </div>
  );
};
export default NotifyError;
