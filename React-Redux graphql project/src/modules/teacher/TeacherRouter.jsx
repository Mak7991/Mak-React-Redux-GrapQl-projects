import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TeacherHome from "modules/teacher/views/TeacherHome/TeacherHome";
import NotFound from "components/shared/NotFound/NotFound";
import TeacherHeaderContainer from "modules/teacher/views/TeacherHeaderContainer/TeacherHeaderContainer";
import TeacherProfile from "modules/teacher/views/TeacherProfile/TeacherProfile";
import TeacherProfileEdit from "modules/teacher/views/TeacherProfileEdit/TeacherProfileEdit";
function TeacherRouter(props) {
  return (
    <>
      <TeacherHeaderContainer />
      <Switch>
        <Route exact path="/" component={TeacherHome} />
        <Route exact path={`/teacherProfile`} component={TeacherProfile} />
        <Route exact path={`/teacherProfileEdit`} component={TeacherProfileEdit} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default TeacherRouter;
