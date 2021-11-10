import React from 'react';
import {Button, Col, Row} from 'react-bootstrap';

import useAuth from '../../context/useAuth';
import NavBar from '../Shared/NavBar/NavBar';
import DashBoardHome from './DashboardHome/DashBoardHome';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom"
import Review from './Review/Review';
import ManageOrders from './ManageOrders/ManageOrders';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './Make Admin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import AdminRoute from '../Login/AdminRoute/AdminRoute';

const Dashboard=() => {
    const {user, admin, logout}=useAuth();
    console.log(admin);
    let { path, url } = useRouteMatch();

    return (
        <div>
            <NavBar></NavBar>
        <div className='container'>

            <br /><br /><br />

            <Row>
                    <Col className='dashboard-panel' xs={12} md={3}>
                        {
                            admin? <div>
                                <Link to={`${url}/manageorders`}>Manage All Orders</Link>
                        <br />
                        <Link to={`${url}/addproduct`}>Add A Product</Link>
                        <br />
                        <Link to={`${url}/makeadmin`}>Make Admin</Link>
                        <br />
                        <Link to={`${url}/manageproducts`}>Manage Products</Link>
                            </div>:<div>
                                    {/* For General user routes */}
                        <Link to={`${url}/pay`}>Payment</Link>
                        <br />
                        <Link to={`${url}/myorder`}>My Orders</Link>
                        <br />
                        <Link to={`${url}/review`}>Review</Link>
                        <br /><br />
                        {/* For Admin Routes */}
                        </div>
                        }



                        <Button onClick={logout} className='nav-items fs-6 px-3  py-2 fw-bold text-dark text-start' as={Link} to="/login" variant="light">Logout</Button>
                </Col>
                    <Col className='dashboard-routing' xs={6} md={9}>
                        <Switch>
                                <Route exact path={path}>
                                <DashBoardHome></DashBoardHome>
                                </Route>
                                <AdminRoute path={`${path}/manageorders`}>
                                <ManageOrders></ManageOrders>
                                </AdminRoute>
                                <AdminRoute path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                                </AdminRoute>
                                <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                                </AdminRoute>
                                <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                                </AdminRoute>

                                <Route exact path={path}>
                                <DashBoardHome></DashBoardHome>
                                </Route>
                                <Route path={`${path}/pay`}>
                                <Payment></Payment>
                                </Route>
                                <Route path={`${path}/review`}>
                                <Review></Review>
                                </Route>
                                <Route path={`${path}/myorder`}>
                                <MyOrders></MyOrders>
                                </Route>
                                <Route path={`${path}/myorder`}>
                                <MyOrders></MyOrders>
                                </Route>
                            </Switch>


{/*
<Switch>
<Route exact path={path}>
<DashboardHome></DashboardHome>
</Route>
<Route exact path={`${path}/pay`}>
<Payment></Payment>
</Route>
<Route exact path={`${path}/review`}>
<Review></Review>
</Route>
<Route path={`${path}/myorder`}>
<MyOrders></MyOrders>
</Route>
<Route path={`${path}/myorder`}>
<MyOrders></MyOrders>
</Route>
<Route path={`${path}/manageorders`}>
<ManageOrders></ManageOrders>
</Route>
<Route path={`${path}/addproduct`}>
<AddProduct></AddProduct>
</Route>
<Route path={`${path}/makeadmin`}>
<MakeAdmin></MakeAdmin>
</Route>
<Route path={`${path}/manageproducts`}>
<ManageProducts></ManageProducts>
</Route>
</Switch>
<Route path='' element={<DashBoardHome></DashBoardHome>}/>
<Route path='pay' element={<Payment></Payment>}/>
<Route path='myorder' element={<MyOrders></MyOrders>}/>
<Route path='review' element={<Review></Review>}/>
<Route path='manageorders' element={<ManageOrders></ManageOrders>}/>
<Route path='addproduct' element={<AddProduct></AddProduct>} />
<Route path='makeadmin' element={<MakeAdmin></MakeAdmin>} />
<Route path='manageproducts' element={<ManageProducts></ManageProducts>} />

                        */}
                </Col>
            </Row>


            </div>
         </div>
    );
};

export default Dashboard;