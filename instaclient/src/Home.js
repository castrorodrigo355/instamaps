import React, { Component } from 'react';
import HomeAdmin from './HomeAdmin';
import HomeUser from './HomeUser';
import jwt_decode from 'jwt-decode';
// import 'bootstrap/dist/css/bootstrap.css';

import "./App.css"

// **********************
// https://leafletjs.com/
// https://ipapi.co/json
// https://github.com/alex3165/react-mapbox-gl
// https://github.com/toddmotto/public-apis#calendar
// **********************

class Home extends Component {
  
    render() {
    let token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    const admin = decoded.admin;
    return (
        <div>
            {
                admin ?
                <HomeAdmin />
                :
                <HomeUser />
            }
        </div>
    )}
}

export default Home;