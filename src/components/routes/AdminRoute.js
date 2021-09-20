import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Loader from "../otherComps/Loader";

const AdminRoute = (props) => {
  const isAdmin = useSelector((state) => state.auth);

  const { component: Component, location, ...rest } = props;

  if(!isAdmin.data){
    return <Loader />
    
  }
  setTimeout(() => {
    if(!isAdmin.data && !isAdmin.isAuthenticated){
      <Redirect to='/' />
    }
  }, 3000);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAdmin.isAuthenticated && isAdmin.data.isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
