import React from 'react';
import {Link} from 'react-router-dom';

const Product=({pd}) => {
    const {_id, Name, summary, img, price, spec, subtitle}=pd;
    return (
        <div className="product pb-3 col-lg-3 my-4 mx-lg-5">
            <img className='img-fluid' src={img} alt="" />
            <h5>
                {Name}
            </h5>
            <p>{subtitle}</p>
            <p>{spec}</p>
            <p>Price ${price}</p>
             <Link to={`/purchase/${_id}`}>
                <button className="book-btn">Book {Name}</button>
            </Link>

        </div>
    );
};

export default Product;