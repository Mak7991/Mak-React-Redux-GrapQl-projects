import {
  //get current user
  GET_CURRENT_USER_DATA_IN_PROGRESS,
  GET_CURRENT_USER_DATA_SUCCESS,
  GET_CURRENT_USER_DATA_FAILED,

  //Edit student
  EDIT_STUDENT_IN_PROGRESS,
  EDIT_STUDENT_SUCCESS,
  EDIT_STUDENT_FAILED,

  // update password
  UPDATE_STUDENT_PASSWORD_IN_PROGRESS,
  UPDATE_STUDENT_PASSWORD_SUCCESS,
  UPDATE_STUDENT_PASSWORD_FAILED,

  //update social links student
  UPDATE_STUDENT_SOCIAL_LINKS_IN_PROGRESS,
  UPDATE_STUDENT_SOCIAL_LINKS_SUCCESS,
  UPDATE_STUDENT_SOCIAL_LINKS_FAILED,

  //Update cover photo
  UPDATE_STUDENT_COVER_PHOTO_IN_PROGRESS,
  UPDATE_STUDENT_COVER_PHOTO_SUCCESS,
  UPDATE_STUDENT_COVER_PHOTO_FAILED,

  //Update Avatar
  UPDATE_STUDENT_AVATAR_IN_PROGRESS,
  UPDATE_STUDENT_AVATAR_SUCCESS,
  UPDATE_STUDENT_AVATAR_FAILED,
} from "constants/action";

import {
  editStudent,
  curUser,
  updatePasswordStudent,
  updateCoverPhoto,
  updateAvatar,
} from "queries/editStudent";
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

// update student data
export const getUpdateUserData = (updatedData) => {
  return async (dispatch) => {
    dispatch(updateUserDataInProgress());
    try {
      const { data } = await client.mutate({
        mutation: editStudent,
        variables: {
          data: {
            ...updatedData,
          },
        },
      });
      dispatch(updateUserDataSuccessful(createDateFormat(data.updateStudent)));
      return createDateFormat(data.updateStudent);
    } catch (err) {
      dispatch(updateUserDataError(err));
      return err;
    }
  };
};

const updateUserDataInProgress = () => {
  return {
    type: EDIT_STUDENT_IN_PROGRESS,
    payload: {},
  };
};

const updateUserDataSuccessful = (curUser) => {
  return {
    type: EDIT_STUDENT_SUCCESS,
    payload: {
      curUser,
    },
  };
};
const updateUserDataError = (err) => {
  return {
    type: EDIT_STUDENT_FAILED,
    payload: {
      err,
    },
  };
};

//set password
export const getUpdateStudentPassword = (updatedPassword) => {
  return async (dispatch) => {
    dispatch(updateStudentPasswordInProgress());
    try {
      const { data } = await client.mutate({
        mutation: updatePasswordStudent,
        variables: {
          data: {
            ...updatedPassword,
          },
        },
      });
      dispatch(updateStudentPasswordSuccessful());
      return data.updatePassword;
    } catch (err) {
      dispatch(updateStudentPasswordError(err));
      return err;
    }
  };
};

const updateStudentPasswordInProgress = () => {
  return {
    type: UPDATE_STUDENT_PASSWORD_IN_PROGRESS,
    payload: {},
  };
};

const updateStudentPasswordSuccessful = () => {
  return {
    type: UPDATE_STUDENT_PASSWORD_SUCCESS,
    payload: {},
  };
};
const updateStudentPasswordError = (err) => {
  return {
    type: UPDATE_STUDENT_PASSWORD_FAILED,
    payload: {
      err,
    },
  };
};

// update student social links
export const getUpdateUserSocialLink = (updatedData) => {
  return async (dispatch) => {
    dispatch(updateUserSocialLinkInProgress());
    try {
      const { data } = await client.mutate({
        mutation: editStudent,
        variables: {
          data: {
            ...updatedData,
          },
        },
      });
      dispatch(updateUserSocialLinkSuccessful(createDateFormat(data.updateStudent)));
      return createDateFormat(data.updateStudent);
    } catch (err) {
      dispatch(updateUserSocialLinkError(err));
      return err;
    }
  };
};

const updateUserSocialLinkInProgress = () => {
  return {
    type: UPDATE_STUDENT_SOCIAL_LINKS_IN_PROGRESS,
    payload: {},
  };
};

const updateUserSocialLinkSuccessful = (curUser) => {
  return {
    type: UPDATE_STUDENT_SOCIAL_LINKS_SUCCESS,
    payload: {
      curUser,
    },
  };
};
const updateUserSocialLinkError = (err) => {
  return {
    type: UPDATE_STUDENT_SOCIAL_LINKS_FAILED,
    payload: {
      err,
    },
  };
};

// update cover photo
export const getUpdateCoverPhoto = (updatedCoverPhoto) => {
  return async (dispatch) => {
    dispatch(updateCoverPhotoInProgress());
    try {
      const { data } = await client.mutate({
        mutation: updateCoverPhoto,
        variables: { file: updatedCoverPhoto },
      });
      dispatch(updateCoverPhotoSuccessful(data.updateCoverPhoto));
      return data.updateCoverPhoto;
    } catch (err) {
      dispatch(updateCoverPhotoError(err));
      return err;
    }
  };
};

const updateCoverPhotoInProgress = () => {
  return {
    type: UPDATE_STUDENT_COVER_PHOTO_IN_PROGRESS,
    payload: {},
  };
};

const updateCoverPhotoSuccessful = (url) => {
  return {
    type: UPDATE_STUDENT_COVER_PHOTO_SUCCESS,
    payload: {
      url,
    },
  };
};
const updateCoverPhotoError = (err) => {
  return {
    type: UPDATE_STUDENT_COVER_PHOTO_FAILED,
    payload: {
      err,
    },
  };
};

// update cover photo
export const getUpdateAvatar = (updatedAvatar) => {
  return async (dispatch) => {
    dispatch(updateAvatarInProgress());
    try {
      const { data } = await client.mutate({
        mutation: updateAvatar,
        variables: { file: updatedAvatar },
      });
      dispatch(updateAvatarSuccessful(data.updateAvatar));
      return data.updateAvatar;
    } catch (err) {
      dispatch(updateAvatarError(err));
      return err;
    }
  };
};

const updateAvatarInProgress = () => {
  return {
    type: UPDATE_STUDENT_AVATAR_IN_PROGRESS,
    payload: {},
  };
};

const updateAvatarSuccessful = (url) => {
  return {
    type: UPDATE_STUDENT_AVATAR_SUCCESS,
    payload: {
      url,
    },
  };
};
const updateAvatarError = (err) => {
  return {
    type: UPDATE_STUDENT_AVATAR_FAILED,
    payload: {
      err,
    },
  };
};
