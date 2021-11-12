import React from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import MakeAdmin from './MakeAdmin';
import './MakeAdmin.css'
const MakeAdminPage = () => {
    return (
        <div >
            <NavBar></NavBar>
            <br /> <br />
            <div className="container admin-page">
                <MakeAdmin ></MakeAdmin>
            </div>
            <br />
            <br />
            <Footer></Footer>

        </div>
    );
};

export default MakeAdminPage;