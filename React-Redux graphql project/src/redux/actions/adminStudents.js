import { client } from "setup/graphql";
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

import { queryAdminStudents, createStudent } from "queries/adminStudent";

// get students for admin side render
export const getAdminStudents = InstituteId => {
  return async dispatch => {
    dispatch(getAdminStudentsInProgress());
    try {
      const { data } = await client.query({
        query: queryAdminStudents,
        variables: {
          where: {
            id: InstituteId,
          },
        },
      });
      dispatch(getAdminStudentsSuccessful(data.institute.students));
    } catch (err) {
      dispatch(getAdminStudentsError(err));
      return err;
    }
  };
};

const getAdminStudentsInProgress = () => {
  return {
    type: GET_ADMIN_STUDENTS_IN_PROGRESS,
    payload: {},
  };
};

const getAdminStudentsSuccessful = students => {
  return {
    type: GET_ADMIN_STUDENTS_SUCCESS,
    payload: {
      students,
    },
  };
};
const getAdminStudentsError = error => {
  return {
    type: GET_ADMIN_STUDENTS_FAILED,
    payload: {
      error: error.message,
    },
  };
};

// create sutdents form admin side
export const createAdminStudent = studentData => {
  return async dispatch => {
    dispatch(createAdminStudentsInProgress());
    try {
      const { data } = await client.mutate({
        mutation: createStudent,
        variables: {
          data: studentData.data,
          where: studentData.where,
        },
      });
      dispatch(createAdminStudentsSuccessful(data.createStudent));
    } catch (err) {
      dispatch(createAdminStudentsError(err));
      return err;
    }
  };
};

const createAdminStudentsInProgress = () => {
  return {
    type: CREATE_ADMIN_STUDENTS_IN_PROGRESS,
    payload: {},
  };
};

const createAdminStudentsSuccessful = student => {
  return {
    type: CREATE_ADMIN_STUDENTS_SUCCESS,
    payload: {
      student,
    },
  };
};
const createAdminStudentsError = error => {
  return {
    type: CREATE_ADMIN_STUDENTS_FAILED,
    payload: {
      error,
    },
  };
};
