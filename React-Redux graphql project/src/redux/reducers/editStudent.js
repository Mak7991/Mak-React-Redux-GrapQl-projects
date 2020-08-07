import {
  //get current user
  GET_CURRENT_USER_DATA_IN_PROGRESS,
  GET_CURRENT_USER_DATA_SUCCESS,
  GET_CURRENT_USER_DATA_FAILED,

  //Edit student
  EDIT_STUDENT_IN_PROGRESS,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_FAILED,

  // update password
  UPDATE_STUDENT_PASSWORD_IN_PROGRESS,
  UPDATE_STUDENT_PASSWORD_SUCCESS,
  UPDATE_STUDENT_PASSWORD_FAILED,

  //update social links
  UPDATE_STUDENT_SOCIAL_LINKS_IN_PROGRESS,
  UPDATE_STUDENT_SOCIAL_LINKS_SUCCESS,
  UPDATE_STUDENT_SOCIAL_LINKS_FAILED,

  //Update cover photo student
  UPDATE_STUDENT_COVER_PHOTO_IN_PROGRESS,
  UPDATE_STUDENT_COVER_PHOTO_SUCCESS,
  UPDATE_STUDENT_COVER_PHOTO_FAILED,

  //Update Avatar student
  UPDATE_STUDENT_AVATAR_IN_PROGRESS,
  UPDATE_STUDENT_AVATAR_SUCCESS,
  UPDATE_STUDENT_AVATAR_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
const initialState = {
  uiState: IN_PROGRESS,
  uiStateUpdatingStudent: null,
  uiStateUpdatingStudentPassword: null,
  uiStateUpdatingStudentSocial: null,
  uiStateUpdatingCoverPhoto: null,
  uiStateUpdatingAvatar: null,
  error: "",
  curUser: "",
};
const editStudent = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER_DATA_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
        error: "",
      };
    case GET_CURRENT_USER_DATA_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        error: "",
        curUser: action.payload.curUser,
      };
    case GET_CURRENT_USER_DATA_FAILED:
      return {
        ...state,
        uiState: FAILED,
        error: action.payload.err,
      };

    case EDIT_STUDENT_IN_PROGRESS:
      return {
        ...state,
        uiStateUpdatingStudent: IN_PROGRESS,
        error: "",
      };
    case EDIT_STUDENT_SUCCESS:
      return {
        ...state,
        uiStateUpdatingStudent: SUCCESS,
        error: "",
        curUser: action.payload.curUser,
      };
    case EDIT_STUDENT_FAILED:
      return {
        ...state,
        uiStateUpdatingStudent: FAILED,
        error: action.payload.err,
      };

    case UPDATE_STUDENT_PASSWORD_IN_PROGRESS:
      return {
        ...state,
        uiStateUpdatingStudentPassword: IN_PROGRESS,
        error: "",
      };
    case UPDATE_STUDENT_PASSWORD_SUCCESS:
      return {
        ...state,
        uiStateUpdatingStudentPassword: SUCCESS,
        error: "",
      };
    case UPDATE_STUDENT_PASSWORD_FAILED:
      return {
        ...state,
        uiStateUpdatingStudentPassword: FAILED,
        error: action.payload.err,
      };

    case UPDATE_STUDENT_SOCIAL_LINKS_IN_PROGRESS:
      return {
        ...state,
        uiStateUpdatingStudentSocial: IN_PROGRESS,
        error: "",
      };
    case UPDATE_STUDENT_SOCIAL_LINKS_SUCCESS:
      return {
        ...state,
        uiStateUpdatingStudentSocial: SUCCESS,
        error: "",
        curUser: action.payload.curUser,
      };
    case UPDATE_STUDENT_SOCIAL_LINKS_FAILED:
      return {
        ...state,
        uiStateUpdatingStudentSocial: FAILED,
        error: action.payload.err,
      };

    case UPDATE_STUDENT_COVER_PHOTO_IN_PROGRESS:
      return {
        ...state,
        uiStateUpdatingCoverPhoto: IN_PROGRESS,
        error: "",
      };
    case UPDATE_STUDENT_COVER_PHOTO_SUCCESS:
      return {
        ...state,
        uiStateUpdatingCoverPhoto: SUCCESS,
        error: "",
        curUser: {
          ...state.curUser,
          coverPhoto: {
            secureUrl: action.payload.url.secureUrl,
          },
        },
      };
    case UPDATE_STUDENT_COVER_PHOTO_FAILED:
      return {
        ...state,
        uiStateUpdatingCoverPhoto: FAILED,
        error: action.payload.err,
      };

    case UPDATE_STUDENT_AVATAR_IN_PROGRESS:
      return {
        ...state,
        uiStateUpdatingAvatar: IN_PROGRESS,
        error: "",
      };
    case UPDATE_STUDENT_AVATAR_SUCCESS:
      return {
        ...state,
        uiStateUpdatingAvatar: SUCCESS,
        error: "",
        curUser: {
          ...state.curUser,
          photo: {
            secureUrl: action.payload.url.secureUrl,
          },
        },
      };
    case UPDATE_STUDENT_AVATAR_FAILED:
      return {
        ...state,
        uiStateUpdatingAvatar: FAILED,
        error: action.payload.err,
      };
    default:
      return {
        ...state,
      };
  }
};
export default editStudent;
