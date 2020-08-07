import {
  //get current user
  GET_CURRENT_USER_DATA_IN_PROGRESS,
  GET_CURRENT_USER_DATA_SUCCESS,
  GET_CURRENT_USER_DATA_FAILED,
} from "constants/action";

import { curUser } from "queries/user";
import { client } from "setup/graphql";
import { createDateFormat } from "redux/actions/utilities";
// get student data from server
export const getCurrentUserData = () => {
  return async (dispatch) => {
    dispatch(currentUserDataInProgress());
    try {
      const { data } = await client.query({
        query: curUser,
      });
      if (data.me.student) {
        dispatch(currentUserDataSuccessful(createDateFormat(data.me.student)));
        return createDateFormat(data.me.student);
      } else if (data.me.teacher) {
        dispatch(currentUserDataSuccessful(createDateFormat(data.me.teacher)));
        return createDateFormat(data.me.teacher);
      } else if (data.me.superAdmin) {
        dispatch(currentUserDataSuccessful(createDateFormat(data.me.superAdmin)));
        return createDateFormat(data.me.superAdmin);
      }
    } catch (err) {
      dispatch(currentUserDataError(err));
      return err;
    }
  };
};

const currentUserDataInProgress = () => {
  return {
    type: GET_CURRENT_USER_DATA_IN_PROGRESS,
    payload: {},
  };
};

const currentUserDataSuccessful = (curUser) => {
  return {
    type: GET_CURRENT_USER_DATA_SUCCESS,
    payload: {
      curUser,
    },
  };
};
const currentUserDataError = (err) => {
  return {
    type: GET_CURRENT_USER_DATA_FAILED,
    payload: {
      err,
    },
  };
};
