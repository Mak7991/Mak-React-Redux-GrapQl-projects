import * as React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import AuthContainer from "pages/AuthContainer/AuthContainer";
import NotFound from "components/shared/NotFound/NotFound";
import ProtectedRoutes from "components/ProtectedRoutes";

const AppRouter = () => (
  <Switch>
    <Route path="/auth" component={AuthContainer} />
    <Route path="/" component={ProtectedRoutes} />
    <Route component={NotFound} />
  </Switch>
);

export default AppRouter;
