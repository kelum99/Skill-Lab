import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Test from "../src/pages/Finance Management/Test";
import AddItem from "../src/pages/store Management/addItem";
import DisplayItem from "../src/pages/store Management/displayItem";
import EditItem from "../src/pages/store Management/EditItem";
import viewStore from "../src/pages/store Management/viewStore";


function MainRouter() {
  return (
      <>
        <Route path="/AddItem" exact component={AddItem} />
        <Route path="/DisplayItem" exact component={DisplayItem}/>
        <Route path="/EditItem" exact component={EditItem} />
        <Route path="/viewStore" exact component={viewStore}/>
        <Route path="/viewStore" exact component={viewStore}/>
    </>
  );
}

export default MainRouter;
