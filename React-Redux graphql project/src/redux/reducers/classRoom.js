import {
  //get class room
  GET_CLASS_ROOM_IN_PROGRESS,
  GET_CLASS_ROOM_SUCCESS,
  GET_CLASS_ROOM_FAILED,

  //create student post
  CREATE_STUDENT_POST_IN_PROGRESS,
  CREATE_STUDENT_POST_SUCCESS,
  CREATE_STUDENT_POST_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initialState = {
  uiState: IN_PROGRESS,
  uiStatePost: null,
  error: "",
  curClassRoom: "",
  post: "",
};
const classRoom = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASS_ROOM_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
        error: "",
      };
    case GET_CLASS_ROOM_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        error: "",
        curClassRoom: action.payload.curClassRoom,
      };
    case GET_CLASS_ROOM_FAILED:
      return {
        ...state,
        uiState: FAILED,
        error: action.payload.err,
      };
    case CREATE_STUDENT_POST_IN_PROGRESS:
      return {
        ...state,
        uiStatePost: IN_PROGRESS,
        error: "",
      };
    case CREATE_STUDENT_POST_SUCCESS:
      return {
        ...state,
        error: "",
        uiStatePost: SUCCESS,
        post: action.payload.post,
      };
    case CREATE_STUDENT_POST_FAILED:
      return {
        ...state,
        uiStatePost: FAILED,
        error: action.payload.err,
      };
    default:
      return {
        ...state,
      };
  }
};
export default classRoom;
