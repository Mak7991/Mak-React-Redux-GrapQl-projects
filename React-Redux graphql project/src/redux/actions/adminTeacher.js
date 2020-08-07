import { client } from "setup/graphql";
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

import { queryAdmintTeachers, createTeacher } from "queries/adminTeacher";

// get students for admin side render
export const getAdminTeachers = InstituteId => {
  return async dispatch => {
    dispatch(getAdminTeachersInProgress());
    try {
      const { data } = await client.query({
        query: queryAdmintTeachers,
        variables: {
          where: {
            id: InstituteId,
          },
        },
      });
      dispatch(getAdminTeachersSuccessful(data.institute.teachers));
    } catch (error) {
      dispatch(getAdminTeachersError(error));
      return error;
    }
  };
};

const getAdminTeachersInProgress = () => {
  return {
    type: FETCH_ADMIN_TEACHERS_IN_PROGRESS,
    payload: {},
  };
};

const getAdminTeachersSuccessful = teachers => {
  return {
    type: FETCH_ADMIN_TEACHERS_SUCCESS,
    payload: {
      teachers,
    },
  };
};
const getAdminTeachersError = error => {
  return {
    type: FETCH_ADMIN_TEACHERS_FAILED,
    payload: {
      error,
    },
  };
};

// create sutents form admin side
export const createAdminTeacher = teacherData => {
  return async dispatch => {
    dispatch(createAdminTeacherInProgress());
    try {
      const { data } = await client.mutate({
        mutation: createTeacher,
        variables: {
          data: teacherData.data,
          where: teacherData.where,
        },
      });
      dispatch(createAdminTeacherSuccessful(data.createTeacher));
    } catch (error) {
      dispatch(createAdminTeacherError(error));
      return error;
    }
  };
};

const createAdminTeacherInProgress = () => {
  return {
    type: CREATE_ADMIN_TEACHER_IN_PROGRESS,
    payload: {},
  };
};

const createAdminTeacherSuccessful = teacher => {
  return {
    type: CREATE_ADMIN_TEACHER_SUCCESS,
    payload: {
      teacher,
    },
  };
};
const createAdminTeacherError = error => {
  return {
    type: CREATE_ADMIN_TEACHER_FAILED,
    payload: {
      error,
    },
  };
};
