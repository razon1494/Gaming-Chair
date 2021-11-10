import React, {useEffect, useState} from 'react';
import {Spinner} from 'react-bootstrap';

const ManageProducts=() => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true);
    const [control, setConrol]=useState(false);
    //getting data from db
    useEffect(() => {
        fetch('https://immense-escarpment-32991.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, [control]);
    const handleDelete=id => {
        var sure=window.confirm(`Are you sure you want to delete this Product`);
        if(sure) {
      fetch(`https://immense-escarpment-32991.herokuapp.com/deleteproduct/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
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
    return (
        <div>
            <h2>Products </h2>
            {
                loading && <Spinner animation="grow" variant="warning" />
                }
 <div className='table-responsive'>
<table class="table table-hover table-dark table-responsive-sm">
<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
                </thead>
                 <tbody>
            {
                        products.map(pd => <tr>
                            <th scope="row">{index++}</th>
                            <td>{pd.Name}</td>
                            <td>{pd.price}</td>
                            <td>
                                <button
                onClick={()=> handleDelete(pd._id)}
                className="btn btn-danger"
              >Delete</button>
                            </td>

                </tr>)
                }</tbody>
                </table></div>
        </div>
    );
};

export default ManageProducts;