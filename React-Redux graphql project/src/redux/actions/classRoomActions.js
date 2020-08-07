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

import { getClassroom, createPost } from "queries/classRooms";
import { client } from "setup/graphql";

// get student data from server
export const getCurrentClassRoomInfo = id => {
  return async dispatch => {
    dispatch(classRoomInfoInProgress());
    try {
      const { data } = await client.query({
        query: getClassroom,
        variables: {
          where: {
            id,
          },
        },
      });
      dispatch(classRoomInfoSuccessful(data.getClassroom));
    } catch (err) {
      dispatch(classRoomInfoError(err));
      return err;
    }
  };
};

const classRoomInfoInProgress = () => {
  return {
    type: GET_CLASS_ROOM_IN_PROGRESS,
    payload: {},
  };
};

const classRoomInfoSuccessful = curClassRoom => {
  return {
    type: GET_CLASS_ROOM_SUCCESS,
    payload: {
      curClassRoom,
    },
  };
};
const classRoomInfoError = err => {
  return {
    type: GET_CLASS_ROOM_FAILED,
    payload: {
      err,
    },
  };
};

// create post from student in the classroom
export const createPostStudent = (classroomId, postText) => {
  return async dispatch => {
    dispatch(createPostStudentInProgress());
    try {
      const { data } = await client.mutate({
        mutation: createPost,
        variables: {
          where: {
            classroomId,
          },
          data: {
            postText,
          },
        },
      });
      dispatch(createPostStudentSuccessful(data.createPost));
    } catch (err) {
      dispatch(createPostStudentError(err));
      return err;
    }
  };
};

const createPostStudentInProgress = () => {
  return {
    type: CREATE_STUDENT_POST_IN_PROGRESS,
    payload: {},
  };
};

const createPostStudentSuccessful = post => {
  return {
    type: CREATE_STUDENT_POST_SUCCESS,
    payload: {
      post,
    },
  };
};
const createPostStudentError = err => {
  return {
    type: CREATE_STUDENT_POST_FAILED,
    payload: {
      err,
    },
  };
};
