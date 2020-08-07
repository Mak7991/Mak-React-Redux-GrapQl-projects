import {
  //get current user
  GET_CURRENT_USER_DATA_IN_PROGRESS,
  GET_CURRENT_USER_DATA_SUCCESS,
  GET_CURRENT_USER_DATA_FAILED,

  //Edit teacher
  EDIT_TEACHER_IN_PROGRESS,
  EDIT_TEACHER_SUCCESS,
  EDIT_TEACHER_FAILED,

  // update password
  UPDATE_TEACHER_PASSWORD_IN_PROGRESS,
  UPDATE_TEACHER_PASSWORD_SUCCESS,
  UPDATE_TEACHER_PASSWORD_FAILED,

  //update social links teacher
  UPDATE_TEACHER_SOCIAL_LINKS_IN_PROGRESS,
  UPDATE_TEACHER_SOCIAL_LINKS_SUCCESS,
  UPDATE_TEACHER_SOCIAL_LINKS_FAILED,

  //Update cover photo teacher
  UPDATE_TEACHER_COVER_PHOTO_IN_PROGRESS,
  UPDATE_TEACHER_COVER_PHOTO_SUCCESS,
  UPDATE_TEACHER_COVER_PHOTO_FAILED,

  //Update Avatar teacher
  UPDATE_TEACHER_AVATAR_IN_PROGRESS,
  UPDATE_TEACHER_AVATAR_SUCCESS,
  UPDATE_TEACHER_AVATAR_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
const initialState = {
  uiState: IN_PROGRESS,
  uiStateUpdatingTeacher: null,
  uiStateUpdatingTeacherPassword: null,
  uiStateUpdatingTeacherSocial: null,
  uiStateUpdatingCoverPhoto: null,
  uiStateUpdatingAvatar: null,
  error: "",
  curUser: "",
};
const editTeacher = (state = initialState, action) => {
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

    case EDIT_TEACHER_IN_PROGRESS:
      return {
        ...state,
        uiStateUpdatingTeacher: IN_PROGRESS,
        error: "",
      };
    case EDIT_TEACHER_SUCCESS:
      return {
        ...state,
        uiStateUpdatingTeacher: SUCCESS,
        error: "",
        curUser: action.payload.curUser,
      };
    case EDIT_TEACHER_FAILED:
      return {
        ...state,
        uiStateUpdatingTeacher: FAILED,
        error: action.payload.err,
      };

    case UPDATE_TEACHER_PASSWORD_IN_PROGRESS:
      return {
        ...state,
        uiStateUpdatingTeacherPassword: IN_PROGRESS,
        error: "",
      };
    case UPDATE_TEACHER_PASSWORD_SUCCESS:
      return {
        ...state,
        uiStateUpdatingTeacherPassword: SUCCESS,
        error: "",
      };
    case UPDATE_TEACHER_PASSWORD_FAILED:
      return {
        ...state,
        uiStateUpdatingTeacherPassword: FAILED,
        error: action.payload.err,
      };

    case UPDATE_TEACHER_SOCIAL_LINKS_IN_PROGRESS:
      return {
        ...state,
        uiStateUpdatingTeacherSocial: IN_PROGRESS,
        error: "",
      };
    case UPDATE_TEACHER_SOCIAL_LINKS_SUCCESS:
      return {
        ...state,
        uiStateUpdatingTeacherSocial: SUCCESS,
        error: "",
        curUser: action.payload.curUser,
      };
    case UPDATE_TEACHER_SOCIAL_LINKS_FAILED:
      return {
        ...state,
        uiStateUpdatingTeacherSocial: FAILED,
        error: action.payload.err,
      };

    case UPDATE_TEACHER_COVER_PHOTO_IN_PROGRESS:
      return {
        ...state,
        uiStateUpdatingCoverPhoto: IN_PROGRESS,
        error: "",
      };
    case UPDATE_TEACHER_COVER_PHOTO_SUCCESS:
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
    case UPDATE_TEACHER_COVER_PHOTO_FAILED:
      return {
        ...state,
        uiStateUpdatingCoverPhoto: FAILED,
        error: action.payload.err,
      };

    case UPDATE_TEACHER_AVATAR_IN_PROGRESS:
      return {
        ...state,
        uiStateUpdatingAvatar: IN_PROGRESS,
        error: "",
      };
    case UPDATE_TEACHER_AVATAR_SUCCESS:
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
    case UPDATE_TEACHER_AVATAR_FAILED:
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
export default editTeacher;
