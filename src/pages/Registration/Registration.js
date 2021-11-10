import React from 'react';
import {Link, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../context/useAuth';
import { useState } from "react";
// import {Spinner} from 'react-bootstrap';

const Registration=() => {
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from.pathname||'/home';
    const {user, registerUser, isLoading, authError}=useAuth();
    const [userData, setUserData]=useState({});


 //function to handle register
    const handleRegisterSubmit=e => {
        if(userData.password!==userData.password2) {
            alert('password did not match');
            return;
        }
        const userName=userData.fname+' '+userData.lname;
        userData['userName']=userName;

        registerUser(userData.email, userData.password,history,userData.userName)
        console.log('with user name', userData)
        e.preventDefault();
    }
    //function to save the given data
    const handleOnBlur=e => {
        const field=e.target.name;
        const value=e.target.value;
        console.log(field, value)

        const newUserData={...userData};
        newUserData[field]=value;
        setUserData(newUserData);
        e.preventDefault();
    }

    return (
        <div className='container mt-4'>
            <h2 className='text-center'>Register Here</h2>
            <form onSubmit={handleRegisterSubmit}>
                <div className="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input onBlur={handleOnBlur} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your First Name" name='fname'/>
    <label for="exampleInputEmail1">Last Name</label>
    <input onBlur={handleOnBlur} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Last Name" name='lname'/>
    <label for="exampleInputEmail1">Email address</label>
    <input onBlur={handleOnBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email'/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onBlur={handleOnBlur} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password'/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input onBlur={handleOnBlur} type="password" className="form-control" id="exampleInputPassword1" placeholder="Re-type Password" name='password2'/>
  </div>
  <div className="form-check">
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>


                <Link to='/login'>Login Here</Link>
                {
                        authError&&<p>{authError.message}</p>
                    }


              {/*   {
                        isLoading&&<div>
                             <Spinner animation="border" variant="danger" />
                        </div>
                    } */}

        </div>
    );
};

export default Registration;