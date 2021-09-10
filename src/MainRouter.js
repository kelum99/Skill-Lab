import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Test from "../src/pages/Finance Management/Test";
import SignupLec from "../src/pages/Authentication Management/SignupLec";
import SignupStd from "../src/pages/Authentication Management/SignupStd";
import Signin from "../src/pages/Authentication Management/Signin";
import AreYou from "../src/pages/Authentication Management/AreYou";
import LecProfile from "../src/pages/Authentication Management/LecProfile";
import StdProfile from "../src/pages/Authentication Management/StdProfile";
import LecManagement from "./pages/Authentication Management/LecManagement";
import StdManagement from "./pages/Authentication Management/StdManagement";
import Home from "./pages/Authentication Management/Home";

function MainRouter() {
  return (
    <>
      
        <Route path="/test" exact component={Test} />
        <Route path="/signuplec" exact component={SignupLec} />
        <Route path="/signupstd" exact component={SignupStd} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/areyou" exact component={AreYou} />
        <Route path="/lecprofile" exact component={LecProfile} />
        <Route path="/stdprofile" exact component={StdProfile} />
        <Route path="/lecmanagement" exact component={LecManagement} />
        <Route path="/stdmanagement" exact component={StdManagement} />
        <Route path="/" exact component={Home} />
      
    </>
  );
}

export default MainRouter;
