import * as React from "react";

// constants
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
// import { Redirect } from "react-router-dom";

// components
import Loader from "components/shared/Loader/Loader";
import Alert from "components/shared/Alert/Alert";
const checkToRedirectToLogin = (error, onFailure) => {
  //   if (error.networkError && error.networkError.statusCode === 401) {
  //     return <Redirect to="/login" />;
  //   }
  // alert(error);
  return onFailure(error);
};

const Async = ({ uiState, onSuccess, onFailure, onProgress, error }: Props) => {
  return (
    <>
      {uiState === IN_PROGRESS && onProgress()}
      {uiState === SUCCESS && onSuccess()}
      {uiState === FAILED && checkToRedirectToLogin(error, onFailure)}
    </>
  );
};
Async.defaultProps = {
  onProgress: () => <Loader />,
  onFailure: (message) => <Alert message={message} type="error" showIcon />,
};

export default Async;
