import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import {Link, Outlet, Route, Routes} from 'react-router-dom';
import useAuth from '../../context/useAuth';
import NavBar from '../Shared/NavBar/NavBar';
import DashBoardHome from './DashboardHome/DashBoardHome';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';

const Dashboard=() => {
    const {user, admin, logout}=useAuth();


    return (
        <div>
            <NavBar></NavBar>
        <div className='container'>

            <br /><br /><br />

            <Row>
                    <Col className='dashboard-panel' xs={12} md={3}>
                        {/* For General user routes */}
                        <Link to='pay'>Payment</Link>
                        <br />
                        <Link to='myorder'>My Orders</Link>
                        <br />
                        <Link to='review'>Review</Link>
                        <br /><br />
                        {/* For Admin Routes */}
                        <Link to='manageorders'>Manage All Orders</Link>
                        <br />
                        <Link to='addproduct'>Add A Product</Link>
                        <br />
                        <Link to='makeadmin'>Make Admin</Link>
                        <br />
                        <Link to='manageproducts'>Manage Products</Link>
                        <br /><br />

                        <Button onClick={logout} className='nav-items fs-6 px-3  py-2 fw-bold text-dark text-start' as={Link} to="/login" variant="light">Logout</Button>
                </Col>
                <Col className='dashboard-routing' xs={6} md={9}>
                       <Outlet/>
                </Col>
            </Row>


            </div>
         </div>
    );
};

export default Dashboard;