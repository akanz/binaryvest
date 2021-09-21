import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Loader from "../otherComps/Loader";

const PrivateRoute = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector(state => state.auth.token)
  const { component: Component, location, ...rest } = props;

  // if(!isAuth){
  //   return <Loader />
  // }

  if (token) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  //redirect if there is no user
  return <Redirect to={{
        pathname: '/login',
        state: {from: location}
  }} />;
};

export default PrivateRoute;
