import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import useAuth from '../../context/useAuth';

const Purchase=() => {
    //destructuring user
    const {user}=useAuth();
    //getting params from url
    const {id}=useParams();
    const navigate=useNavigate();
    //required state declaration
    const [product, setProduct]=useState()
    const [phoneNumber, setPhoneNumber]=useState('');
    const [address, setAddress]=useState('');
    //new product order
    const addedProduct={};
    //getting Specific Data
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    const handlePlaceOrder=() => {
        addedProduct.email=user?.email;
        addedProduct.displayName=user?.displayName;
        addedProduct.status=false;
        addedProduct.phonenumber=phoneNumber;
        addedProduct.address=address;
        addedProduct.Name=product.Name;
        addedProduct.price=product.price;
        addedProduct.img=product.img;

        fetch("http://localhost:5000/placeorder", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(addedProduct),
        }).then((res) => res.json())
            .then((result) => console.log(result))
            .finally(alert('Item Booked. Please Confirm on manage booking page'));
        navigate('/');
}

     const handlePhone=e => {
        console.log(e.target.value);
        const phone=e.target.value;
        setPhoneNumber(phone);
}

    const handleAddress=e => {
        console.log(e.target.value);
        const adrs=e.target.value;
        setAddress(adrs);
}
    return (
        <div className='placeorder-container'>
            <h1 className='book-title'>You Want To Book {product?.placeName} Package</h1>
        <div className='row mt-5 mx-auto container align-items-center justify-content-center'>
            <div className='col-md-6'>
            <img className='img-fluid' src={product?.img} alt="" /></div>
            <div className='details text col-md-6'>
            <h1 className='details-title'>{product?.Name}</h1>
            <h5 className='price'>Price: ${product?.price}</h5>
            <h5 className="text-start spots"> <span className='span'> Spots Will Be visited:</span> {product?.spec}</h5>
            <p className='text-start'>Your Email: {user.email}</p>
            <p className='text-start'>Your Name: {user.displayName}</p>
            <p className='text-start'>Hello, <span className='place-details'>{user.displayName} </span>Please Put Your address & Phone number below. Hardcopy of tickets will be sent to your address. Also All documents will also be mailed to your email address <span className='place-details'> {user.email} </span></p>
            <h5 className='address'>Your Address</h5>
                    <textarea onChange={handleAddress} className="form-control container my-3" placeholder='Address' />
                    <h5 className='address my-4  '>Please Give Your Phone Number </h5>
                    <input className='mb-4 w-50 form-control container' placeholder='Phone Number' type="number" onChange={handlePhone} />
                    <br />
            {
               (phoneNumber === '') ? <button onClick={handlePlaceOrder} className="btn btn-danger disabled">Place Your Order</button> : <button onClick={handlePlaceOrder} className="btn btn-danger">Place Your Order</button>
            }

            <Link to={`/`}>

                </Link>
            </div>
            <div className='more my-5'>
                <h2 className='details-head'>More About {product?.Name}</h2>
                <p className='details-p'>{product?.details}</p>
            </div>
        </div></div>
    );
};

export default Purchase;