import React from 'react';
import {Spinner} from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../context/useAuth';


const UserRoute = ({ children, ...rest }) => {
    const { user,isUser, isLoading } = useAuth();
    if(isLoading) {return <Spinner animation="border" variant="danger" />}
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