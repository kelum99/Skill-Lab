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
import New from "./pages/Job Vacancy Management/New";
import AdminSideBar from "./components/AdminSideBar";



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
        <Route path="/admin" exact component={AdminSideBar} />
        <Route path="/new" exact component={New} />

        
      
    </>
  );
}

export default MainRouter;
