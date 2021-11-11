import React, {useEffect, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import Review from '../../Dashboard/Review/Review';
import Product from '../../Explore/Product/Product';
import NavBar from '../../Shared/NavBar/NavBar';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';
import './Home.css';

const Home=() => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    const [reviews, setReviews]=useState([]);
    const [reviewloading, setReviewLoading]=useState(true);
    //getting products from db
    useEffect(() => {
        fetch('https://immense-escarpment-32991.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, []);
    let popularProducts=[];
    popularProducts=products.slice(products.length-6);
    console.log(popularProducts);
//getting review from db
    useEffect(() => {
    fetch('https://immense-escarpment-32991.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setReviewLoading(false);
            });
}, [])

    return (
        <div>
            {/* First Part Navbar  */}
            <NavBar></NavBar>
            {/* Second Part Slider */}
            <Slider></Slider>
            {/* Third Part Products */}
            <div className="products-section">
                <h2 className='text-center top-products-title py-2'>OUR TOP RATED CHAIRS</h2>
                <div className='d-flex align-items-center justify-content-center'>
                {
                loading && <Spinner animation="grow" variant="warning" />
                }</div>
                <div className="container row mx-auto align-items-center justify-content-center">
                {
                    popularProducts.map(pd => <Product
                        key={pd._id}
                        pd = {pd}
                    ></Product>)
                }
                </div>
                <div className="review-section">
                    <h2 className='text-center review-title py-3'>WHAT CLIENT'S SAY ABOUT <br /> GAMER'S CHAIRS</h2>
                    {
                reviewloading && <Spinner animation="grow" variant="warning" />
                    }
            <div className="container row mx-auto gx-3 align-items-center justify-content-center">
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review = {review}
                    ></Reviews>)
                }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;