import {
  // get admin teachers
  FETCH_ADMIN_TEACHERS_IN_PROGRESS,
  FETCH_ADMIN_TEACHERS_SUCCESS,
  FETCH_ADMIN_TEACHERS_FAILED,
  //create admin teacher
  CREATE_ADMIN_TEACHER_IN_PROGRESS,
  CREATE_ADMIN_TEACHER_SUCCESS,
  CREATE_ADMIN_TEACHER_FAILED,
} from "constants/action";

import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initilastate = {
  uiState: IN_PROGRESS,
  error: null,
  teachers: [],
  uiStateCreateTeacher: IN_PROGRESS,
  errorCreateTeacher: null,
  teacher: null,
};

const adminTeachers = (state = initilastate, action) => {
  switch (action.type) {
    case FETCH_ADMIN_TEACHERS_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
      };

    case FETCH_ADMIN_TEACHERS_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        teachers: action.payload.teachers,
      };

    case FETCH_ADMIN_TEACHERS_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
      };

    case CREATE_ADMIN_TEACHER_IN_PROGRESS:
      return {
        ...state,
        uiStateCreateTeacher: IN_PROGRESS,
      };

    case CREATE_ADMIN_TEACHER_SUCCESS:
      return {
        ...state,
        uiStateCreateTeacher: SUCCESS,
        teacher: action.payload.teacher,
        teachers: [...state.teachers, action.payload.teacher],
      };

    case CREATE_ADMIN_TEACHER_FAILED:
      return {
        ...state,
        errorCreateTeacher: action.payload.error,
        uiStateCreateTeacher: FAILED,
      };

    default:
      return state;
  }
};

export default adminTeachers;
