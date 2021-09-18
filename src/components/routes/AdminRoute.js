import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminRoute = (props) => {
  const isAdmin = useSelector((state) => state.auth);
  
  const { component: Component, location, ...rest } = props;

  if (isAdmin.data && isAdmin.data.isAdmin) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  //redirect if not an admin
  return <Redirect to={{
        pathname: '/',
        state: {from: location}
  }} />;
};

export default AdminRoute;
