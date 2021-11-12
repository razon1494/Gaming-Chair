import React, {useEffect} from 'react';

const Payment=() => {
    //Title Change
 useEffect(() => {
        document.title="Payment";
    }, []);
    return (
        <div>
            <h2>Payment Coming Soon</h2>
        </div>
    );
};

export default Payment;