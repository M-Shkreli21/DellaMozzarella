import React, { useState, useEffect } from 'react';
import MyReservationList from './MyReservationList.js'

function MyReservations(){

    const [reservation, setReservations] = useState([])

    useEffect(() => {
        fetch('/reservations')
        .then(response => response.json())
        .then(data => setReservations(data))
    }, [])

    const render_reservations = reservation.map((reservation) => {
        return <MyReservationList key={reservation.id} reservation={reservation}/>
        })

    return(
    <div>
        <h2>My Reservations & Orders</h2>
        {render_reservations}
    </div>

)}

export default MyReservations;