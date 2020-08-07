import {
  //get current user
  GET_CURRENT_USER_DATA_IN_PROGRESS,
  GET_CURRENT_USER_DATA_SUCCESS,
  GET_CURRENT_USER_DATA_FAILED,

  //Edit teacher
  EDIT_TEACHER_IN_PROGRESS,
  EDIT_TEACHER_SUCCESS,
  EDIT_TEACHER_FAILED,

  // update password
  UPDATE_TEACHER_PASSWORD_IN_PROGRESS,
  UPDATE_TEACHER_PASSWORD_SUCCESS,
  UPDATE_TEACHER_PASSWORD_FAILED,

  //update social links teacher
  UPDATE_TEACHER_SOCIAL_LINKS_IN_PROGRESS,
  UPDATE_TEACHER_SOCIAL_LINKS_SUCCESS,
  UPDATE_TEACHER_SOCIAL_LINKS_FAILED,

  //Update cover photo
  UPDATE_TEACHER_COVER_PHOTO_IN_PROGRESS,
  UPDATE_TEACHER_COVER_PHOTO_SUCCESS,
  UPDATE_TEACHER_COVER_PHOTO_FAILED,

  //Update Avatar
  UPDATE_TEACHER_AVATAR_IN_PROGRESS,
  UPDATE_TEACHER_AVATAR_SUCCESS,
  UPDATE_TEACHER_AVATAR_FAILED,
} from "constants/action";

import {
  editTeacher,
  curUser,
  updatePasswordTeacher,
  updateCoverPhoto,
  updateAvatar,
} from "queries/editTeacher";
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
        mutation: editTeacher,
        variables: {
          data: {
            ...updatedData,
          },
        },
      });
      dispatch(updateUserDataSuccessful(createDateFormat(data.updateTeacher)));
      return createDateFormat(data.updateTeacher);
    } catch (err) {
      dispatch(updateUserDataError(err));
      return err;
    }
  };
};

const updateUserDataInProgress = () => {
  return {
    type: EDIT_TEACHER_IN_PROGRESS,
    payload: {},
  };
};

const updateUserDataSuccessful = (curUser) => {
  return {
    type: EDIT_TEACHER_SUCCESS,
    payload: {
      curUser,
    },
  };
};
const updateUserDataError = (err) => {
  return {
    type: EDIT_TEACHER_FAILED,
    payload: {
      err,
    },
  };
};

//set password
export const getUpdateTeacherPassword = (updatedPassword) => {
  return async (dispatch) => {
    dispatch(updateTeacherPasswordInProgress());
    try {
      const { data } = await client.mutate({
        mutation: updatePasswordTeacher,
        variables: {
          data: {
            ...updatedPassword,
          },
        },
      });
      dispatch(updateTeacherPasswordSuccessful());
      return data.updatePassword;
    } catch (err) {
      dispatch(updateTeacherPasswordError(err));
      return err;
    }
  };
};

const updateTeacherPasswordInProgress = () => {
  return {
    type: UPDATE_TEACHER_PASSWORD_IN_PROGRESS,
    payload: {},
  };
};

const updateTeacherPasswordSuccessful = () => {
  return {
    type: UPDATE_TEACHER_PASSWORD_SUCCESS,
    payload: {},
  };
};
const updateTeacherPasswordError = (err) => {
  return {
    type: UPDATE_TEACHER_PASSWORD_FAILED,
    payload: {
      err,
    },
  };
};

// update teacher social links
export const getUpdateUserSocialLink = (updatedData) => {
  return async (dispatch) => {
    dispatch(updateUserSocialLinkInProgress());
    try {
      const { data } = await client.mutate({
        mutation: editTeacher,
        variables: {
          data: {
            ...updatedData,
          },
        },
      });
      dispatch(updateUserSocialLinkSuccessful(createDateFormat(data.updateTeacher)));
      return createDateFormat(data.updateTeacher);
    } catch (err) {
      dispatch(updateUserSocialLinkError(err));
      return err;
    }
  };
};

const updateUserSocialLinkInProgress = () => {
  return {
    type: UPDATE_TEACHER_SOCIAL_LINKS_IN_PROGRESS,
    payload: {},
  };
};

const updateUserSocialLinkSuccessful = (curUser) => {
  return {
    type: UPDATE_TEACHER_SOCIAL_LINKS_SUCCESS,
    payload: {
      curUser,
    },
  };
};
const updateUserSocialLinkError = (err) => {
  return {
    type: UPDATE_TEACHER_SOCIAL_LINKS_FAILED,
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
    type: UPDATE_TEACHER_COVER_PHOTO_IN_PROGRESS,
    payload: {},
  };
};

const updateCoverPhotoSuccessful = (url) => {
  return {
    type: UPDATE_TEACHER_COVER_PHOTO_SUCCESS,
    payload: {
      url,
    },
  };
};
const updateCoverPhotoError = (err) => {
  return {
    type: UPDATE_TEACHER_COVER_PHOTO_FAILED,
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
    type: UPDATE_TEACHER_AVATAR_IN_PROGRESS,
    payload: {},
  };
};

const updateAvatarSuccessful = (url) => {
  return {
    type: UPDATE_TEACHER_AVATAR_SUCCESS,
    payload: {
      url,
    },
  };
};
const updateAvatarError = (err) => {
  return {
    type: UPDATE_TEACHER_AVATAR_FAILED,
    payload: {
      err,
    },
  };
};
