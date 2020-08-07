import {
  GET_NOTIFICATION_IN_PROGRESS,
  GET_NOTIFICATION_FAILED,
  GET_NOTIFICATION_SUCCESS,
} from "constants/action";
export const getNotification = () => {
  return async (dispatch) => {
    dispatch(notificationInProgress());
    try {
      setTimeout(() => {
        dispatch(notificationSuccessful());
      }, 2000);
    } catch (err) {
      dispatch(notificationError(err));
    }
  };
};

const notificationInProgress = () => {
  return {
    type: GET_NOTIFICATION_IN_PROGRESS,
  };
};

const notificationSuccessful = () => {
  return {
    type: GET_NOTIFICATION_SUCCESS,
  };
};
const notificationError = (err) => {
  return {
    type: GET_NOTIFICATION_FAILED,
    payload: {
      error: err,
    },
  };
};
