import Home from './Home.js';
import Header from './Header.js';
import Menu from './Menu.js';
import RequestAReservation from './RequestAReservation.js';
import ContactUs from './ContactUs.js';
import MyReservations from './MyReservations.js';
import ReservationsAndOrders from './ReservationsAndOrders.js';
import React, { useState, useEffect } from 'react'
import {Route, useLocation} from 'react-router-dom'
import SlideRoutes from 'react-slide-routes'
import './App.css';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Header/>
      <SlideRoutes location={location} duration={400}>
        <Route path="/" element={<Home exact/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="ContactUs" element={<ContactUs/>} />
        <Route path="/RequestAReservation" element={<RequestAReservation/>} />
        <Route path="MyReservations" element={<MyReservations/>} />
        <Route path="ReservationsAndOrders" element={<ReservationsAndOrders/>} />
      </SlideRoutes>
    </div>
  );
}

export default App;
