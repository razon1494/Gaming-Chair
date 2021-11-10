import React, {useEffect, useState} from 'react';
import {Spinner} from 'react-bootstrap';
import NavBar from '../../Shared/NavBar/NavBar';
import Product from '../Product/Product';
import './Products.css'
const Products=() => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    //getting data from db
    useEffect(() => {
        fetch('https://immense-escarpment-32991.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false)
            })
    }, [])
    console.log(products);
    return (
        <div>
            <NavBar ></NavBar>
            <br /><br />
            <div className="products">
                <h2 className="products-title mt-5 text-center">All Chair Collections</h2>
                {
                loading && <Spinner animation="grow" variant="warning" />
                }
                <div className="container row mx-auto">
                    {
                        products.map(pd => <Product
                            key={pd._id}
                            pd={pd}
                        ></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;