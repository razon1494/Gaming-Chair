import React from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../context/useAuth';
import { useState } from "react";
import { useForm } from "react-hook-form";
// import {Spinner} from 'react-bootstrap';

const Login=() => {
    const location=useLocation();
    const history=useHistory();
    const {user, loginUser,isUser, admin, isLoading, signInWithGoogle, authError}=useAuth();
    const [loginData, setLoginData]=useState({})
    const handleOnChange=e => {
        const field=e.target.name;
        const value=e.target.value;
        console.log(field, value);
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit=e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    // if(user.email) {
    //     history.push('/dashboard')
    // }


    return (
        <div className='container mt-4'>
        <h2 className='text-center'>Login Here</h2>
<form onSubmit={handleLoginSubmit}>
         <label for="exampleInputEmail1">Email address</label>
        <input onChange={handleOnChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' />

        <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={handleOnChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password'/>
    </div> <br/>
                <button type="submit" className="btn btn-primary">Log In</button>
     </form>
            <Link to='/register'>Register Here</Link>
        </div>
    );
};

export default Login;