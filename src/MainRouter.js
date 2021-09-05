import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Test from "../src/pages/Finance Management/Test";

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact component={Test} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
