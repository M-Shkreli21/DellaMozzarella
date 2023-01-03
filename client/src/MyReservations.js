import React, { useState, useEffect } from 'react';
import MyReservationList from './MyReservationList.js'

function MyReservations(){

    const [reservations, setReservations] = useState([])

    useEffect(() => {
        fetch("/reservations")
        .then(response => response.json())
        .then(data => setReservations(data))
    }, [])

    const render_reservation = reservations.map((reservation) => {
        return <MyReservationList key={reservation.id} reservation={reservation} />
    })

    return(
    <h2>{render_reservation}</h2>
)}

export default MyReservations;