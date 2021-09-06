import React, { useRef, useState } from "react";
import { Route, Switch } from "react-router";
import Verify from "./VerifyUser";
import Withdraw from "./Withdraw";
import ConfirmDeposit from "./ConfirmDeposit";
import Dashboard from "./Dashboard";
import Routes from "./Routes";

const Admin = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin" component={Dashboard} />
        <Route path="/admin" component={Routes} />
      </Switch>
    </div>
  );
};

export default Admin;
