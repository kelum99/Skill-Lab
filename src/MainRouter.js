import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Test from "../src/pages/Finance Management/Test";

import DeleteRequest from "./pages/Job Vacancy Management/DeleteRequest";
import Careere from "./pages/Job Vacancy Management/Career";
import Application from "./pages/Job Vacancy Management/Application";
import Sucsess from "./pages/Job Vacancy Management/Sucsess";
import Failed from "./pages/Job Vacancy Management/Failed";
import Print from "./pages/Job Vacancy Management/Print";
import AddJob from "./pages/Job Vacancy Management/AddJob";
import Delete from "./pages/Job Vacancy Management/Delete";
import update from "./pages/Job Vacancy Management/Update";


import SignupLec from "../src/pages/Authentication Management/SignupLec";
import SignupStd from "../src/pages/Authentication Management/SignupStd";
import Signin from "../src/pages/Authentication Management/Signin";
import AreYou from "../src/pages/Authentication Management/AreYou";
import LecProfile from "../src/pages/Authentication Management/LecProfile";
import StdProfile from "../src/pages/Authentication Management/StdProfile";
import LecManagement from "./pages/Authentication Management/LecManagement";
import StdManagement from "./pages/Authentication Management/StdManagement";



function MainRouter() {
  return (
    <>

     
      
        <Route path="/careere" exact component={Careere} />
        <Route path="/deleteRequest" exact component={DeleteRequest} />
        <Route path="/application" exact component={Application} />
        <Route path="/sucsess" exact component={Sucsess} />
        <Route path="/error" exact component={Failed} />
        <Route path="/print" exact component={Print} />
        <Route path="/addcareere" exact component={AddJob} />
        <Route path="/deletecareere" exact component={Delete} />
        <Route path="/updatecareere" exact component={update} />
        

      
        <Route path="/test" exact component={Test} />
        <Route path="/signuplec" exact component={SignupLec} />
        <Route path="/signupstd" exact component={SignupStd} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/areyou" exact component={AreYou} />
        <Route path="/lecprofile" exact component={LecProfile} />
        <Route path="/stdprofile" exact component={StdProfile} />
        <Route path="/lecmanagement" exact component={LecManagement} />
        <Route path="/stdmanagement" exact component={StdManagement} />

      
    </>
  );
}

export default MainRouter;
