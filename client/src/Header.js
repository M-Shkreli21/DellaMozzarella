import React from 'react';
import { NavLink } from 'react-router-dom'
import CompanyLogo from './IMG-7033.jpg'
import CookingPizza from './IMG-1333.jpg'
import FrankieStanding from './IMG-1862.jpg'
import FrankieStanding2 from './IMG-6866.jpg'
import FrankieMakingMuzz from './IMG-7540.jpg'
import FreshMuzz from './IMG-8407.jpg'
import MakingMuzz from './IMG-8413.MOV'
import BobosVideo from './IMG-9879.MOV'

function Header() {
    return (
        <div className='header'>
            <div className='logo_container'>
            <img className='logo' src={CompanyLogo} alt="DellaMozarella Logo"/>
            </div>
            <div className='scroll_parent'>
            <img className='scroll_images' src={FrankieMakingMuzz} alt="Frankie Making Muzz" />
            <img className='scroll_images' src={FreshMuzz} alt="Fresh Muzz" />
            <video className='scroll_images' src={MakingMuzz} width="500" height="400" controls>
            </video>
            <video className='scroll_images' src={BobosVideo} width="500" height="400" controls>
            </video>
            <img className='scroll_images' src={CookingPizza} alt="Frankie Making Pizza" />
            <img className='scroll_images' src={FrankieStanding} alt="Frankie Ready" />
            <img className='scroll_images' src={FrankieStanding2} alt="Frankie In Pizzaria" />
            </div>
            <div className='links'>
                <NavLink className='navLink' to="/">Home</NavLink>
                <NavLink className='navLink' to="/Menu">Menu</NavLink>
                <NavLink className='navLink' to="/ContactUs">Contact Us</NavLink>
                <NavLink className='navLink' to="/RequestAReservation">Request A Reservation</NavLink>
                <NavLink className='navLink' to="/MyReservations">My Reservations</NavLink>
                <NavLink className='navLink' to="/ReservationsAndOrders">Reservations And Orders</NavLink>
                <NavLink className='navLink' to="/Login">Log In</NavLink>
            </div>
        </div>
    )
}

export default Header