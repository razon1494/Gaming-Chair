import React, {useEffect} from 'react';
import './AddProduct.css';
import {useForm} from "react-hook-form";
import axios from 'axios';
const AddProduct=() => {
    const {register, handleSubmit, reset}=useForm();

    const onSubmit=data => {
        console.log(data);
        axios.post(`http://localhost:5000/addservice `, data)
            .then(res => {
                if(res.data.insertedId) {
                    //confirmation
                    alert('Product Added SuccessFully');
                    //reset the form
                    reset()
                }
            })

  }
    return (
        <div>
            <h2>Add a product here</h2>

            <div className="form-container container">
                <form className='form row align-items-center justify-content-center' onSubmit={handleSubmit(onSubmit)}>
                <h5 className='d-inline col-md-4'>Chair Name/Model : </h5>

                <input className='col-md-8 py-3 my-3' {...register("Name", {required: true})} placeholder='Chair' />
                <br /><br />
        <h5 className='d-inline col-md-4'>Subtitle  :   </h5>
                <input className='col-md-8 py-3 my-3' {...register("subtitle", {required: true})} placeholder='subtitle' />
                <br /><br />
        <h5 className='d-inline col-md-4'>Specifications :   </h5>
                <input className='col-md-8 py-3 my-3' {...register("spec", {required: true})} placeholder='Specifications' />
                <br /><br />

                <h5 className='d-inline col-md-4'>Price :   </h5>
                <input className='col-md-8 py-3 my-3' type="number" {...register("price", {required: true})} placeholder='Price' />
                <br /><br />

                 <h5 className='d-inline col-md-4'>Photo URL :   </h5>
                <input className='col-md-8 py-3 my-3' {...register("img", {required: true})} placeholder='Photo URL' />
                <br /><br />
                 <h5 className='d-inline col-md-4'>Summary :   </h5>
                <input className='col-md-8 py-3 my-3' {...register("summary", {required: true})} placeholder='Short Description About product' />
                <br /><br />
                 <h3 className='my-4'>Write Description About Your Tour below   </h3>
                <textarea  className="form-control m-3 p-4 w-75"{...register("details", {required: true})} placeholder='Details' />
                <br /><br />
      <input className='w-25 submit-part py-2 my-3 fs-3' type="submit" />
    </form>
            </div>

        </div>
    );
};

export default AddProduct;