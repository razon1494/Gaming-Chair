import logo from './logo.svg';
import './App.css';
import AuthProvider from './context/AuthProvider';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Products from './pages/Explore/Products/Products';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import DashBoardHome from './pages/Dashboard/DashboardHome/DashBoardHome';
import NavBar from './pages/Shared/NavBar/NavBar';
import Purchase from './pages/Purchase/Purchase';
import Dashboard from './pages/Dashboard/Dashboard';
import Payment from './pages/Dashboard/Payment/Payment';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import Review from './pages/Dashboard/Review/Review';
import ManageOrders from './pages/Dashboard/ManageOrders/ManageOrders';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';
import MakeAdmin from './pages/Dashboard/Make Admin/MakeAdmin';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
function App() {
  return (
    <div className="App">

      <AuthProvider>

        {/* routing using react router version 6 */}
        <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="purchase/:id" element={<Purchase />} />
        <Route path="dashboard/*" element={<Dashboard />}>
          {/* Nested Routing for v-6 */}
            <Route path='' element={<DashBoardHome></DashBoardHome>}/>
            <Route path='pay' element={<Payment></Payment>}/>
            <Route path='myorder' element={<MyOrders></MyOrders>}/>
            <Route path='review' element={<Review></Review>}/>
            <Route path='manageorders' element={<ManageOrders></ManageOrders>}/>
              <Route path='addproduct' element={<AddProduct></AddProduct>} />
              <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>} />
              <Route path='manageproducts' element={<ManageProducts></ManageProducts>} />
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Registration/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
