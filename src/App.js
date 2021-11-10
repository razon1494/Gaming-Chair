import logo from './logo.svg';
import './App.css';
import AuthProvider from './context/AuthProvider';
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
        <Switch>

        <Route exact path="/"> <Home></Home> </Route>
        <Route exact path="/home"><Home /> </Route>
        <Route exact path="/products"><Products /></Route>
            <PrivateRoute exact path="/purchase/:id"><Purchase/></PrivateRoute>
            <Route path="/dashboard"><Dashboard /></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/register"><Registration /></Route>
             <Route path="*"><NotFound/></Route>
      </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
