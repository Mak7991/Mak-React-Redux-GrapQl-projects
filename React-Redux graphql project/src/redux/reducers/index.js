import { combineReducers } from "redux";
import login from "redux/reducers/login";
import notify from "redux/reducers/notification";
import editStudent from "redux/reducers/editStudent";
import editTeacher from "redux/reducers/editTeacher";
import classRoom from "redux/reducers/classRoom";
import user from "redux/reducers/user";
import adminStudents from "redux/reducers/adminStudents";
import adminTeachers from "redux/reducers/adminTeachers";
import adminClassrooms from "redux/reducers/adminClassrooms";

export default combineReducers({
  login,
  notify,
  editStudent,
  editTeacher,
  classRoom,
  user,
  adminStudents,
  adminTeachers,
  adminClassrooms,
});
