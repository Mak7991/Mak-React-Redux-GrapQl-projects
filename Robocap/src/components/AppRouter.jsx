import * as React from "react";
import { Route, Switch } from "react-router-dom";

//Components
import { Login, NotFound, GoalPanel  } from "pages";

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/GoalPanel" component={GoalPanel} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default AppRouter;
