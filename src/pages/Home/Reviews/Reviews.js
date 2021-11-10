import React from 'react';
import './Review.css'
const Reviews=({review}) => {
    const rating=parseInt(review.rating);
    const arr=[ 1, 2, 3, 4, 5];

    return (
        <div className='mb-5'>
            {review.displayName}
            <br />
            {review.details}
            <br />
            <br />
            {
                arr.map(index => <> {index <=rating? <i className="fas fa-star fill "></i>:<i className="far fa-star dim"></i>}</>
                )
            }


        </div>
    );
};

export default Reviews;