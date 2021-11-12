import React from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import ManageOrders from './ManageOrders';

const ManageOrdersPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <br /> <br />
            <div className="container">
                <ManageOrders></ManageOrders>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ManageOrdersPage;