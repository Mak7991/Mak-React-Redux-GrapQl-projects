import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "components/shared/NotFound/NotFound";
// import Header from "components/shared/Header/Header";
import MainView from "modules/admin/views/MainView/MainView";
// import AdminHeaderContainer from "modules/admin/views/AdminHeaderContainer/AdminHeaderContainer";

function AdminRouter(props) {
  return (
    <>
      {/* <AdminHeaderContainer /> */}
      <Switch>
        <Redirect exact from="/" to="/admin" />
        <Route path="/admin" component={MainView} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default AdminRouter;
