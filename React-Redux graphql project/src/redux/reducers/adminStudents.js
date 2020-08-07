import {
  // get admin students
  GET_ADMIN_STUDENTS_IN_PROGRESS,
  GET_ADMIN_STUDENTS_SUCCESS,
  GET_ADMIN_STUDENTS_FAILED,
  //create admin students
  CREATE_ADMIN_STUDENTS_IN_PROGRESS,
  CREATE_ADMIN_STUDENTS_SUCCESS,
  CREATE_ADMIN_STUDENTS_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initilastate = {
  uiState: IN_PROGRESS,
  error: "",
  students: [],
  uiStateCreateStudent: IN_PROGRESS,
  errorCreateStudent: "",
  student: null,
};

const adminStudents = (state = initilastate, action) => {
  switch (action.type) {
    case GET_ADMIN_STUDENTS_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
      };

    case GET_ADMIN_STUDENTS_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        students: action.payload.students,
      };

    case GET_ADMIN_STUDENTS_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
      };

    case CREATE_ADMIN_STUDENTS_IN_PROGRESS:
      return {
        ...state,
        uiStateCreateStudent: IN_PROGRESS,
      };

    case CREATE_ADMIN_STUDENTS_SUCCESS:
      return {
        ...state,
        uiStateCreateStudent: SUCCESS,
        student: action.payload.student,
        students: [...state.students, action.payload.student],
      };

    case CREATE_ADMIN_STUDENTS_FAILED:
      return {
        ...state,
        errorCreateStudent: action.payload.error,
        uiStateCreateStudent: FAILED,
      };

    default:
      return state;
  }
};

export default adminStudents;
