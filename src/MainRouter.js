import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Test from "../src/pages/Finance Management/Test";
import courseMain from  "../src/pages/course/courseMain.js";
import courseCreate from "./pages/course/courseCreate";
import courseforlecturer from "./pages/course/courseforlecturer";

function MainRouter() {
  return (
    <>
    
        <Route path="/test" exact component={Test} />
        <Route path="/courseMain" exact component={courseMain} />
        <Route path="/courseCreate" exact component={courseCreate} />
        <Route path="/courseforlecturer" exact component={courseforlecturer} />
      
    </>
  );
}

export default MainRouter;
