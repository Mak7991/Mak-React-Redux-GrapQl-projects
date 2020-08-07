import {
  GET_NOTIFICATION_IN_PROGRESS,
  GET_NOTIFICATION_FAILED,
  GET_NOTIFICATION_SUCCESS,
} from "constants/action";

import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
const initialState = {
  uiState: IN_PROGRESS,
  error: "",
  notification: {},
};
const notification = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATION_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
        error: "",
      };
    case GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        error: "",
        notification: {
          name: "Muhammad Salman Asif",
          context: "Class Timing 9:00 AM",
        },
      };
    case GET_NOTIFICATION_FAILED:
      return {
        ...state,
        uiState: FAILED,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
export default notification;
