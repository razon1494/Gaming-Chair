import React, {useEffect, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import Review from '../../Dashboard/Review/Review';
import Product from '../../Explore/Product/Product';
import NavBar from '../../Shared/NavBar/NavBar';
import Reviews from '../Reviews/Reviews';


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
            <NavBar></NavBar>
            <br /><br /><br /><br />

            <div className="products-section">
                <h2 className='text-center'>Our Top Rated Products</h2>
                {
                loading && <Spinner animation="grow" variant="warning" />
                }
                <div className="container row mx-auto">
                {
                    popularProducts.map(pd => <Product
                        key={pd._id}
                        pd = {pd}
                    ></Product>)
                }
                </div>
                <div className="review-section">
                    <h2 className='text-center'>Our Customer Review</h2>
                    {
                reviewloading && <Spinner animation="grow" variant="warning" />
                    }
            <div className="container row mx-auto">
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