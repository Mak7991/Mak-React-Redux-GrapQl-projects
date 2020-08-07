import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import StudentRouter from "modules/student/StudentRouter";
import TeacherRouter from "modules/teacher/TeacherRouter";
import AdminRouter from "modules/admin/AdminRouter";
import NotFound from "components/shared/NotFound/NotFound";
import { STUDENT, TEACHER, SUPERADMIN } from "constants/roles";

const MoudleRouter = (props) => {
  const { role } = props;
  switch (role) {
    case STUDENT:
      return <StudentRouter {...props} />;
    case TEACHER:
      return <TeacherRouter {...props} />;
    case SUPERADMIN:
      return <AdminRouter {...props} />;
    default:
      return <NotFound />;
  }
};

export default withRouter(MoudleRouter);
