import Home from './Home.js';
import Header from './Header.js';
import Menu from './Menu.js';
import Login from './Login.js';
import Signup from './SignUp.js';
import RequestAReservation from './RequestAReservation.js';
import ContactUs from './ContactUs.js';
import MyReservations from './MyReservations.js';
// import ReservationsAndOrders from './ReservationsAndOrders.js';
import React, { useState, useEffect } from 'react'
import {Route, useLocation, useNavigate} from 'react-router-dom'
import SlideRoutes from 'react-slide-routes'
import './App.css';

function App() {

  const [user, setUser] = useState({})

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me")
    .then(response => {
      if (response.ok) {
        response.json()
      .then(data => {
        setUser(data)
      })
      }
    })
  },[])
  

  const handleLogout = () => {
    setUser({})
    fetch('/logout', {
      method: 'DELETE'
    })
    alert("You have been logged out")
    navigate('/')
  }

  function addUser(newUser) {
    fetch('/signup', {
      method: 'POST',
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => setUser([data]))
  }



  const location = useLocation();

  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={user} setUser={setUser}/>
      <SlideRoutes location={location} duration={400}>
        <Route path="/" element={<Home exact/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="ContactUs" element={<ContactUs/>} />
        <Route path="/RequestAReservation" element={<RequestAReservation user={user} setUser={setUser}/>} />
        <Route path="MyReservations" element={<MyReservations/>} />
        <Route path="Login" element={<Login user={user} setUser={setUser}/>} />
        <Route path="Signup" element={<Signup addUser={addUser}/>} />
      </SlideRoutes>
    </div>
  );
}

export default App;
