import { DUMMY_CONSTANT_VALUE } from "redux/constants/dummyConstants";

import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "constants/action";
import { client } from "setup/graphql";
import { getUserById } from "queries/dummy";
export const setDummyValue = () => {
  return {
    type: DUMMY_CONSTANT_VALUE,
    payload: DUMMY_CONSTANT_VALUE,
  };
};

export const fetchUser = id => {
  return async dispatch => {
    dispatch(setFetchUserInProgress());
    try {
      const { data } = await client.query({
        query: getUserById,
        variables: {
          id,
        },
      });
      dispatch(setPortfoliosList(data.user));
      return data;
    } catch (err) {
      dispatch(setFetchUserErrorMessage(err));
      return err;
    }
  };
};
const setFetchUserInProgress = () => {
  return {
    type: FETCH_USER,
    payload: {},
  };
};
const setPortfoliosList = user => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: {
      user,
    },
  };
};
const setFetchUserErrorMessage = error => {
  return {
    type: FETCH_USER_FAILED,
    payload: {
      error,
    },
  };
};
