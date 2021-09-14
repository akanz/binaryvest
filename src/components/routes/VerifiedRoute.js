import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const VerifiedRoute = (props) => {
  const isAuth = useSelector((state) => state.auth);
  
  const { component: Component, location, ...rest } = props;

  if (isAuth.isAuthenticated && isAuth.data.isVerified) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  //redirect if there is no user
  return <Redirect to={{
        pathname: '/verification',
        state: {from: location}
  }} />;
};

export default VerifiedRoute;
