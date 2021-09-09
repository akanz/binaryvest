import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { allUsers } from "../../redux/actions/admin";
import Dashboard from "./Dashboard";
import Routes from "./Routes";
import Sidebar from "./Sidebar";
import { createContext } from "react";
import { clearMessage } from "../../redux/actions/message";

export const userContext = createContext("");

const Admin = () => {
  const dispatch = useDispatch("");
  const admin = useSelector((state) => state.auth.data);
  const user = useSelector((state) => state.admin.user);

  useEffect(() => {
    dispatch(allUsers());
    setTimeout(() => {
      dispatch(clearMessage())
    }, 3000);

  }, []);

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
