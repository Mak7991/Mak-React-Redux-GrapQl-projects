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

import { queryAdminClassrooms, createClassroom } from "queries/adminClassroom";

// get classrooms for admin side render
export const getAdminClassrooms = InstituteId => {
  return async dispatch => {
    dispatch(getAdminClassroomsInProgress());
    try {
      const { data } = await client.query({
        query: queryAdminClassrooms,
        variables: {
          where: {
            id: InstituteId,
          },
        },
      });
      dispatch(getAdminClassroomsSuccessful(data.institute.classrooms));
    } catch (err) {
      dispatch(getAdminClassroomsError(err));
      return err;
    }
  };
};

const getAdminClassroomsInProgress = () => {
  return {
    type: GET_CLASS_ROOM_IN_PROGRESS,
    payload: {},
  };
};

const getAdminClassroomsSuccessful = classrooms => {
  return {
    type: GET_CLASS_ROOM_SUCCESS,
    payload: {
      classrooms,
    },
  };
};
const getAdminClassroomsError = error => {
  return {
    type: GET_CLASS_ROOM_FAILED,
    payload: {
      error: error.message,
    },
  };
};

// create classrooms form admin side
export const createAdminClassrooms = classroomData => {
  return async dispatch => {
    dispatch(createAdminClassroomsInProgress());
    try {
      const { data } = await client.mutate({
        mutation: createClassroom,
        variables: {
          data: classroomData.data,
          where: classroomData.where,
        },
      });
      dispatch(createAdminClassroomsSuccessful(data.createClassroom));
    } catch (err) {
      dispatch(createAdminClassroomsError(err));
      return err;
    }
  };
};

const createAdminClassroomsInProgress = () => {
  return {
    type: CREATE_CLASS_ROOM_IN_PROGRESS,
    payload: {},
  };
};

const createAdminClassroomsSuccessful = classroom => {
  return {
    type: CREATE_CLASS_ROOM_SUCCESS,
    payload: {
      classroom,
    },
  };
};
const createAdminClassroomsError = error => {
  return {
    type: CREATE_CLASS_ROOM_FAILED,
    payload: {
      error,
    },
  };
};
