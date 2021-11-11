
import React from 'react';
import {Spinner} from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../context/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user,admin, isLoading } = useAuth();
    if(isLoading || !admin) {return <Spinner animation="border" variant="danger" />}
    console.log(user.email, admin, 'from l');
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
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

export default AdminRoute;