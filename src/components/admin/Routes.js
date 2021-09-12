import React, { useRef, useState } from "react";
import { Route, Switch } from "react-router";
import Verify from "./VerifyUser";
import Withdraw from "./Withdraw";
import ConfirmDeposit from "./ConfirmDeposit";
import Users from "../user/Users";
import User from "../user/User";
import Packages from "./Packages";
import Plan from "./Packages/Plan";

const Routes = () => {
  return (
    <div className="w-9/10 md:w-7/10 mx-auto my-14">
      <Switch>
        <Route exact path='/admin/users' component={Users} />
        <Route exact path='/admin/plans' component={Packages} />
        <Route exact path="/admin/verify" component={Verify} />
        <Route exact path="/admin/deposit" component={ConfirmDeposit} />
        <Route exact path="/admin/withraw" component={Withdraw} />
        <Route exact path='/admin/createPlan' component={Plan} />
        <Route path='/admin/:id' component={User} />
      </Switch>
    </div>
  );
};

export default Routes;
