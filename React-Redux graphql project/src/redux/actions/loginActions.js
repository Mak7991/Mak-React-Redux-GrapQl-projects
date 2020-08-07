import {
  // validate user
  VALIDATE_USER_IN_PROGRESS,
  VALIDATE_USER_SUCCESS,
  VALIDATE_USER_FAILED,
  // login
  LOGIN_IN_PROGRESS,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  //update password
  UPDATE_PASSWORD_IN_PROGRESS,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILED,
  //forget password
  FORGOT_PASSWORD_IN_PROGRESS,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
} from "constants/action";

import { login, authorizeUser, setPassword, forgotPassword } from "queries/auth";
import { client } from "setup/graphql";

export const validateUser = () => {
  return async (dispatch) => {
    dispatch(validationInProgress());
    try {
      const { data } = await client.query({
        query: authorizeUser,
      });
      if (data.authorizeUser.student) {
        dispatch(validationSuccessful(data.authorizeUser.student));
      } else if (data.authorizeUser.teacher) {
        dispatch(validationSuccessful(data.authorizeUser.teacher));
      } else if (data.authorizeUser.superAdmin) {
        dispatch(validationSuccessful(data.authorizeUser.superAdmin));
      }
      return;
    } catch (err) {
      //handle error condition if required
      dispatch(validationError(err));
      return err;
    }
  };
};

const validationInProgress = () => {
  return {
    type: VALIDATE_USER_IN_PROGRESS,
    payload: {},
  };
};

const validationSuccessful = (user) => {
  return {
    type: VALIDATE_USER_SUCCESS,
    payload: {
      user,
    },
  };
};
const validationError = (err) => {
  return {
    type: VALIDATE_USER_FAILED,
    payload: {
      err,
    },
  };
};

//login
export const userLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(setLoginInProgress());
    try {
      const response = await client.query({
        query: login,
        variables: {
          data: {
            email,
            password,
          },
        },
      });
      const { data } = response;
      localStorage.setItem("token", data.login.token);
      if (data.login.student) {
        dispatch(setLoginSuccess(data.login.student));
        localStorage.setItem("id", data.login.student.id);
        localStorage.setItem("email", data.login.student.email);
      } else if (data.login.teacher) {
        dispatch(setLoginSuccess(data.login.teacher));
        localStorage.setItem("id", data.login.teacher.id);
        localStorage.setItem("email", data.login.teacher.email);
      } else if (data.login.superAdmin) {
        dispatch(setLoginSuccess(data.login.superAdmin));
        localStorage.setItem("id", data.login.superAdmin.id);
        localStorage.setItem("email", data.login.superAdmin.email);
      }
      return data;
    } catch (err) {
      dispatch(setLoginError(err.message));
      return err;
    }
  };
};

const setLoginInProgress = () => {
  return {
    type: LOGIN_IN_PROGRESS,
    payload: {},
  };
};
const setLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
};
const setLoginError = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      error,
    },
  };
};

//update password
export const setNewPassword = (id, password) => {
  return async (dispatch) => {
    dispatch(setUpdatePasswordInProgress());
    try {
      const response = await client.mutate({
        mutation: setPassword,
        variables: {
          data: {
            id,
            password,
          },
        },
      });
      const { data } = response;
      if (data.setPassword.student) {
        dispatch(setUpdatePasswordSuccess(data.setPassword.student));
      } else if (data.setPassword.teacher) {
        dispatch(setUpdatePasswordSuccess(data.setPassword.teacher));
      } else if (data.setPassword.superAdmin) {
        dispatch(setUpdatePasswordSuccess(data.setPassword.superAdmin));
      }
      return data;
    } catch (err) {
      dispatch(setUpdatePasswordError(err.message));
      return err;
    }
  };
};

const setUpdatePasswordInProgress = () => {
  return {
    type: UPDATE_PASSWORD_IN_PROGRESS,
    payload: {},
  };
};
const setUpdatePasswordSuccess = (user) => {
  return {
    type: UPDATE_PASSWORD_SUCCESS,
    payload: {
      user,
    },
  };
};
const setUpdatePasswordError = (error) => {
  return {
    type: UPDATE_PASSWORD_FAILED,
    payload: {
      error,
    },
  };
};

//forgot password
export const setForgotPassword = (email) => {
  return async (dispatch) => {
    dispatch(setForgotPasswordInProgress());
    try {
      const response = await client.mutate({
        mutation: forgotPassword,
        variables: {
          email,
        },
      });
      const { data } = response;
      if (data.forgotPassword.student) {
        dispatch(setForgotPasswordSuccess(data.forgotPassword.student));
      } else if (data.forgotPassword.teacher) {
        dispatch(setForgotPasswordSuccess(data.forgotPassword.teacher));
      } else if (data.forgotPassword.superAdmin) {
        dispatch(setForgotPasswordSuccess(data.forgotPassword.superAdmin));
      }
      return data;
    } catch (err) {
      dispatch(setForgotPasswordError(err.message));
      return err;
    }
  };
};

const setForgotPasswordInProgress = () => {
  return {
    type: FORGOT_PASSWORD_IN_PROGRESS,
    payload: {},
  };
};
const setForgotPasswordSuccess = (user) => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload: {
      user,
    },
  };
};
const setForgotPasswordError = (error) => {
  return {
    type: FORGOT_PASSWORD_FAILED,
    payload: {
      error,
    },
  };
};
