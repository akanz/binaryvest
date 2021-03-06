import React, { useRef, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import Verify from "./VerifyUser";
import Withdraw from "./Withdraw";
import ConfirmDeposit from "./ConfirmDeposit";
import Users from "../user/Users";
import User from "../user/User";
import Packages from "./Packages";
import Plan from "./Packages/Plan";
import Allrequests from "../verify/Allrequests";
import Request from "../verify/Request";
import AllDeposits from "../deposits/AllDeposits";

const Routes = () => {
  return (
    <div className="w-9/10 md:w-7/10 mx-auto my-14">
      <Switch>
        <Route exact path="/admin/users" component={Users} />
        <Route exact path="/admin/plans" component={Packages} />
        <Route exact path="/admin/verify/user/:id" component={Verify} />
        <Route exact path="/admin/allRequests" component={Allrequests} />
        <Route exact path="/admin/deposit/:id" component={ConfirmDeposit} />
        <Route exact path="/admin/allDeposits" component={AllDeposits} />
        <Route exact path="/admin/withraw" component={Withdraw} />
        <Route exact path="/admin/createPlan" component={Plan} />
        <Route exact path="/admin/verify/:id" component={Request} />
        <Route exact path="/admin/user/:id" component={User} />
      </Switch>
    </div>
  );
};

export default Routes;
