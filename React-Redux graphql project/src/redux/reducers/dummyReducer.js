import { DUMMY_CONSTANT_VALUE } from "redux/constants/dummyConstants";
import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "constants/action";
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

const initilastate = {
  dummyState: "",
  uiState: IN_PROGRESS,
  error: "",
  user: {},
};

const dummyReducer = (state = initilastate, action) => {
  switch (action.type) {
    case DUMMY_CONSTANT_VALUE:
      return {
        ...state,
        dummyState: action.payload,
      };

    case FETCH_USER:
      return {
        ...state,
        uiState: IN_PROGRESS,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        uiState: SUCCESS,
        user: action.payload.user,
      };

    case FETCH_USER_FAILED:
      return {
        ...state,
        error: action.payload.error,
        uiState: FAILED,
      };

    default:
      return state;
  }
};

export default dummyReducer;
