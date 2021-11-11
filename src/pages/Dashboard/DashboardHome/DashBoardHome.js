import React from 'react';
import useAuth from '../../../context/useAuth';
import './DashBoardHome.css'
const DashBoardHome=() => {
    const {user, admin}=useAuth();
    return (
        <div className='dbhome'>
            {
                admin&&<div>
                    <h1>Hello {user.displayName} You Are An Admin</h1>
                    <h2>This is your DashBoard</h2>
                    <h2>In left side you got 4 options</h2>
                </div>
            }
            {
                !admin&&<div>
                    <h1>Hello {user.displayName} You Are Our Valuable Customer</h1>
                    <h2>This is your DashBoard</h2>
                    <h2>In left side you got 3 options</h2>

                    <h3>Pay Your Pending Bills in 'Pay Your Bill' segment</h3>
                    <h3>See Your Orders in 'My Orders' segment, You can also delete your orders there</h3>
                    <h3>You can give a review us with rating in 'Review' segment</h3>
                </div>
            }
        </div>
    );
};

export default DashBoardHome;