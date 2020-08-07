import {
  //get current user
  GET_CURRENT_USER_DATA_IN_PROGRESS,
  GET_CURRENT_USER_DATA_SUCCESS,
  GET_CURRENT_USER_DATA_FAILED,
} from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
const initialState = {
  uiState: IN_PROGRESS,
  error: "",
  curUser: "",
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER_DATA_IN_PROGRESS:
      return {
        ...state,
        uiState: IN_PROGRESS,
        error: "",
      };
    case GET_CURRENT_USER_DATA_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        error: "",
        curUser: action.payload.curUser,
      };
    case GET_CURRENT_USER_DATA_FAILED:
      return {
        ...state,
        uiState: FAILED,
        error: action.payload.err,
      };
    default:
      return {
        ...state,
      };
  }
};
export default user;
