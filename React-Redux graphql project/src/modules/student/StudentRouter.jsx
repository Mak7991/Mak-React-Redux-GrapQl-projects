import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import StudentHome from "modules/student/views/StudentHome/StudentHome";
import NotFound from "components/shared/NotFound/NotFound";
import Header from "components/shared/Header/Header";
import ClassroomFeed from "modules/student/views/ClassroomFeed/ClassroomFeed";
import AssignmentDetail from "components/shared/AssignmentDetail/AssignmentDetail";
import StudyMaterialDetail from "components/shared/StudyMaterialDetail/StudyMaterialDetail";
import StudentHeaderContainer from "modules/student/views/StudentHeaderContainer/StudentHeaderContainer";
import StudentProfileEdit from "modules/student/views/StudentProfileEdit/StudentProfileEdit";
import StudentProfile from "modules/student/views/StudentProfile/StudentProfile";
import Peoples from "modules/student/views/PeopleContainer/PeopleContainer";
import ClassWork from "components/shared/ClassWork/ClassWork";
import Loader from "components/shared/Loader/Loader";
function StudentRouter(props) {
  return (
    <>
      <StudentHeaderContainer />
      <Switch>
        <Route exact path={`/`} component={StudentHome} />
        <Route exact path={`/:classroomId/feed`} component={ClassroomFeed} />
        <Route exact path={`/:classroomId/classwork`} component={ClassWork} />
        <Route exact path={`/:classroomId/messages`} component={ClassroomFeed} />
        <Route exact path={`/:classroomId/assignmentDetail`} component={AssignmentDetail} />
        <Route exact path={`/:classroomId/peoples`} component={Peoples} />
        <Route exact path={`/:classroomId/studentProfileEdit`} component={StudentProfileEdit} />
        <Route exact path={`/:classroomId/studentProfile`} component={StudentProfile} />
        <Route
          exact
          path={`/:classroomId/:studyMaterialId/studyMaterialDetail`}
          component={StudyMaterialDetail}
        />
        <Route exact path={`/studentProfileEdit`} component={StudentProfileEdit} />
        <Route exact path={`/studentProfile`} component={StudentProfile} />
        <Route exact path={`/loader`} component={Loader} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default StudentRouter;
