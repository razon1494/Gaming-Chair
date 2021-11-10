import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../../../context/useAuth';

const MyOrders=() => {
    //getting all orders of user email
    const {user}=useAuth();
    const [bookings, setBookings]=useState();
    const [control, setConrol]=useState(false);
    useEffect(() => {
    fetch(`https://immense-escarpment-32991.herokuapp.com/myorder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
    }, [control]);
    const handleDelete=(id) => {
        var sure=window.confirm(`Are you sure you want to delete the item`);
        if (sure) {
            fetch(`https://immense-escarpment-32991.herokuapp.com/deleteorder/${id}`, {
                method: "DELETE",
      headers: { "content-type": "application/json" },
            }).then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
        }
    console.log(id);
    }

    let index=1;
    let sum=0;
    return (
        <div>
            <h2>My Orders Are here</h2>
            <div className='table-responsive'>
        <table className="table table-hover">
          <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Chair</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
            {
            bookings?.map(item => <tbody key={item._id}>
                <tr>

                <th scope="row">{index++}</th>
                <td>{item.Name}</td>
                <td>${item.price}</td>
                <td><button
                onClick={()=> handleDelete(item._id)}
                className="btn p-2"
              >
                <i class="fas fa-times cross"></i>
              </button></td>
                    <td>
                        <p className='d-none'>{sum = sum+item.price}</p>
                        {item.status ? <p>Shipped</p> : <p>Pending</p> }
                </td>
              </tr>
                </tbody> )
                    }
                    <th>#</th>
                    <th>Total</th>
                    <th>${sum}</th>
                    <th>--</th>
                    <th>--</th>

        </table></div>

        </div>
    );
};

export default MyOrders;