import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Test from "../src/pages/Finance Management/Test";
import JobApply from "./pages/Job Vacancy Management/Apply";
import Careere from "./pages/Job Vacancy Management/Career";

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact component={Test} />
        <Route path="/careere" exact component={Careere} />
        <Route path="/apply" exact component={JobApply} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
