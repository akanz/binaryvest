import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { allDeposits, allUsers } from "../../redux/actions/admin";
import Dashboard from "./Dashboard";
import Routes from "./Routes";
import Sidebar from "./Sidebar";
import { createContext } from "react";
import { clearMessage } from "../../redux/actions/message";
import { getAllRequests } from "../../redux/actions/verify";
import { getPlans } from "../../helpers/invest";
import Loader from "../otherComps/Loader";

export const userContext = createContext("");

const Admin = () => {
  const dispatch = useDispatch("");
  const admin = useSelector((state) => state.auth.data);
  const user = useSelector((state) => state.admin.user);

  useEffect(() => {
    dispatch(allUsers());
    dispatch(getAllRequests());
    dispatch(allDeposits());
   
    setTimeout(() => {
      dispatch(clearMessage());
    }, 5000);
  }, []);

  if(!admin){
    return <Loader />
  }
  return (
    <div className="flex text-sm">
      <userContext.Provider value={[user, admin]}>
        <Sidebar user={admin} />
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
          <Route path="/admin" component={Routes} />
        </Switch>
      </userContext.Provider>
    </div>
  );
};

export default Admin;
