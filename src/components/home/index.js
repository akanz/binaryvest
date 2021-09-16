import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";
import Payment from "../payment";
import Dashboard from "../dashboard";
import PrivateRoute from "../routes/PrivateRoute";
import Verify from "../verify";
import Admin from "../admin";
import Error from "../otherComps/404";
import AdminRoute from "../routes/AdminRoute";
import VerifiedRoute from '../routes/VerifiedRoute'
import Education from "../education";
import FAQ from "../more/FAQ";
import Reviews from "../more/Reviews";
import Withdraw from "../payment/Withdraw";
import Card from "../payment/Card";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/faqs" component={FAQ} />
          <Route exact path="/reviews" component={Reviews} />
          <AdminRoute Route path="/admin" component={Admin} />
          <Route exact path="/invest" component={Payment} />
          <Route exact path="/invest/card" component={Card} />
          <VerifiedRoute exact path="/withdraw" component={Withdraw} />
          <PrivateRoute exact path="/verification" component={Verify} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default withRouter(Index);
