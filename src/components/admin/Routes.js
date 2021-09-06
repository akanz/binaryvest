import React, { useRef, useState } from "react";
import { Route, Switch } from "react-router";
import Verify from "./VerifyUser";
import Withdraw from "./Withdraw";
import ConfirmDeposit from "./ConfirmDeposit";

const Routes = () => {
  return (
    <div className="w-9/10 md:w-7/10 mx-auto my-14">
      <div className="font-semibold text-xl text-blueish">
        <div>Verify Identity</div>
      </div>
      <Switch>
        <Route exact path="/admin/verify" component={Verify} />
        <Route exact path="/admin/deposit" component={ConfirmDeposit} />
        <Route exact path="/admin/withraw" component={Withdraw} />
      </Switch>
    </div>
  );
};

export default Routes;
