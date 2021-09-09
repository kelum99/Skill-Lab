import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Payment from "../src/pages/Finance Management/Payment";
import Withdraw from "../src/pages/Finance Management/Withdraw"
import PaymentHistory from "../src/pages/Finance Management/PaymentHistory"
import WithdrawalHistory from "../src/pages/Finance Management/WithdrawalHistory"


function MainRouter() {
  return (
    <>
        <Route path="/payment" exact component={Payment} />
        <Route path="/withdraw" exact component={Withdraw} />
        <Route path="/paymentHistory" exact component={PaymentHistory} />
        <Route path="/withdrawHistory" exact component={WithdrawalHistory} />
   
    </>
  );
}

export default MainRouter;
