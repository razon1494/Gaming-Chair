import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../../context/useAuth';


const PrivateRoute=({children, ...rest}) => {
  const {user, isLoading}=useAuth();

  if(isLoading) {
  //private route spinner
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;