import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import useAuth from '../../../context/useAuth';
const Review=() => {
    const {register, handleSubmit, reset}=useForm();
    const {user}=useAuth();
    const onSubmit=data => {
        console.log(data);
        data.displayName=user.displayName;
        axios.post(`https://immense-escarpment-32991.herokuapp.com/addreview `, data)
            .then(res => {
                if(res.data.insertedId) {
                    //confirmation
                    alert('We got your review');
                    //reset the form
                    reset()
                }
            })

  }
    return (
        <div>
            <h2>Hello {user.displayName} Please Rate Us and Leave your valuable Review here</h2>

            <form className='form row align-items-center justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                <br /><br />
                 <h5 className='d-inline col-md-4'>Rating : </h5>
                <select className='col-md-8 py-3 my-3' {...register("rating")}>
        <option value="5" >Excellent (5 Star)</option>
        <option value="4">Good (4 Star)</option>
        <option value="3">Average (3 Star)</option>
        <option value="2">Below Average (2 Star)</option>
        <option value="1">Bad (1 Star)</option>
        <option value="0">Worst (0 Star)</option>
      </select>

                 <h3 className='d-inline col-md-4'>Your Review</h3>
                <textarea  className="form-control col-md-8 py-3 my-3"{...register("details", {required: true})} placeholder='Details' />
                <br /><br />
      <input className='w-25 submit-part py-2 my-3 fs-3' type="submit" />
    </form>

        </div>
    );
};

export default Review;