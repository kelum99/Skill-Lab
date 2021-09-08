import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Test from "../src/pages/Finance Management/Test";
import askQuestion from './pages/Lecturer Management/askQuestion';
import editQuestion from "./pages/Lecturer Management/editQuestion";
import noticeCreate from "./pages/Lecturer Management/noticeCreate";
import allQuestions from "./pages/Lecturer Management/allQuestions";
import allQuestionList from "./pages/Lecturer Management/allQuestionList";
import noticesAll from "./pages/Lecturer Management/noticesAll";
import noticeView from "./pages/Lecturer Management/noticeView";

function MainRouter() {
  return (
    <>
      
        <Route path="/test" exact component={Test} />
        <Route path="/askQ" exact component={askQuestion} />
        <Route path="/EditQ" exact component={editQuestion} />
        <Route path="/createN" exact component={noticeCreate} />
        <Route path="/allQ" exact component={allQuestions} />
        <Route path="/allQL" exact component={allQuestionList} />
        <Route path="/allN" exact component={noticesAll} />
        <Route path="/viewN" exact component={noticeView} />
      
    </>
  );
}

export default MainRouter;
