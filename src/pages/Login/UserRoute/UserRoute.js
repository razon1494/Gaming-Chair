import React from 'react';
import {Spinner} from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../context/useAuth';


const UserRoute=({children, ...rest}) => {
    console.log('hi for user route');
    const {user, isUser, isLoading}=useAuth();
    console.log(user.email, isUser, 'from user route');
    if(isLoading || !isUser) {return <Spinner animation="border" variant="danger" />}
    console.log(user.email, isUser, 'from user route');
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isUser ? (
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

export default UserRoute;