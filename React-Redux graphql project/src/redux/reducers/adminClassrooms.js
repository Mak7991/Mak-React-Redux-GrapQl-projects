import { client } from "setup/graphql";
import {
  // get admin classrooms
  GET_CLASS_ROOM_IN_PROGRESS,
  GET_CLASS_ROOM_SUCCESS,
  GET_CLASS_ROOM_FAILED,
  //create admin classrooms
  CREATE_CLASS_ROOM_IN_PROGRESS,
  CREATE_CLASS_ROOM_SUCCESS,
  CREATE_CLASS_ROOM_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initilastate = {
  uiState: IN_PROGRESS,
  error: "",
  classrooms: [],
  uiStateCreateClassroom: IN_PROGRESS,
  errorCreateClassroom: "",
  classroom: null,
};

const adminClassrooms = (state = initilastate, action) => {
  switch (action.type) {
    case GET_CLASS_ROOM_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
      };

    case GET_CLASS_ROOM_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        classrooms: action.payload.classrooms,
      };

    case GET_CLASS_ROOM_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
      };

    case CREATE_CLASS_ROOM_IN_PROGRESS:
      return {
        ...state,
        uiStateCreateClassroom: IN_PROGRESS,
      };

    case CREATE_CLASS_ROOM_SUCCESS:
      return {
        ...state,
        uiStateCreateClassroom: SUCCESS,
        classroom: action.payload.classroom,
        classrooms: [...state.classrooms, action.payload.classroom],
      };

    case CREATE_CLASS_ROOM_FAILED:
      return {
        ...state,
        errorCreateClassroom: action.payload.error,
        uiStateCreateClassroom: FAILED,
      };

    default:
      return state;
  }
};

export default adminClassrooms;
