import {
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
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initialState = {
  loginButtonUiState: null,
  setPasswordButtonUiState: null,
  forgotPasswordButtonUiState: null,
  error: "",
  user: {},
  uiState: IN_PROGRESS,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_USER_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
        error: "",
        user: {},
      };

    case VALIDATE_USER_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        user: action.payload.user,
        error: "",
      };

    case VALIDATE_USER_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
        user: {},
      };

    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        loginButtonUiState: IN_PROGRESS,
        error: "",
        user: {},
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginButtonUiState: SUCCESS,
        user: action.payload.user,
        error: "",
      };

    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload.error,
        loginButtonUiState: FAILED,
        user: {},
      };
    case UPDATE_PASSWORD_IN_PROGRESS:
      return {
        ...state,
        setPasswordButtonUiState: IN_PROGRESS,
        error: "",
      };

    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        setPasswordButtonUiState: SUCCESS,
        error: "",
      };

    case UPDATE_PASSWORD_FAILED:
      return {
        ...state,
        error: action.payload.error,
        setPasswordButtonUiState: FAILED,
      };
    case FORGOT_PASSWORD_IN_PROGRESS:
      return {
        ...state,
        forgotPasswordButtonUiState: IN_PROGRESS,
        error: "",
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPasswordButtonUiState: SUCCESS,
        error: "",
      };

    case FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        error: action.payload.error,
        forgotPasswordButtonUiState: FAILED,
      };
    default:
      return state;
  }
};

export default auth;
