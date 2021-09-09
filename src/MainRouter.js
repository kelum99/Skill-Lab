import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Test from "../src/pages/Finance Management/Test";
import editReview from "../src/pages/Feedback Management/editReview";
import review from './pages/Feedback Management/review';
import contactUs from "./pages/Feedback Management/contactUs";
import myReview from "./pages/Feedback Management/myReview";
import reviewList from "./pages/Feedback Management/reviewList";

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact component={Test} />
        <Route path="/editR" exact component={editReview}/>
        <Route path="/review" exact component={review}/>
        <Route path="/contactUs" exact component={contactUs}/>
        <Route path="/myReview" exact component={myReview} />
        <Route path="/reviewList" exact component={reviewList}/>
      </Switch>
    </Router>
  );
}

export default MainRouter;
