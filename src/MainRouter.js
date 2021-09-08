import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Test from "./pages/Finance Management/Test";
import AddMarks from "./pages/Student Management/AddMarks";
import Enroll from "./pages/Student Management/Enroll";
import MyCourses from "./pages/Student Management/MyCourses";
import MyPerformance from "./pages/Student Management/MyPerformance";
import UpdateEnroll from "./pages/Student Management/UpdateEnroll";
import UpdateMarks from "./pages/Student Management/UpdateMarks";
import ViewMarks from "./pages/Student Management/ViewMarks";


function MainRouter() {
  return (
    <>
       <Route path="/test" exact component={Test}/>
        <Route path="/enroll" exact component={Enroll}/>
        <Route path="/MyCourses" exact component={MyCourses}/>
        <Route path="/MyPerformance" exact component={MyPerformance}/>
        <Route path="/UpdateEnroll" exact component={UpdateEnroll}/>
        <Route path="/AddMarks" exact component={AddMarks} />
        <Route path="/UpdateMarks" exact component={UpdateMarks} />
        <Route path="/ViewMarks" exact component={ViewMarks} />
      </>
  );
}

export default MainRouter;
