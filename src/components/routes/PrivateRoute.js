import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  
  const { component: Component, location, ...rest } = props;

  if (isAuth) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  //redirect if there is no user
  return <Redirect to={{
        pathname: '/login',
        state: {from: location}
  }} />;
};

export default PrivateRoute;
