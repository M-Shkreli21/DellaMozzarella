import React from 'react';

function MyReservationList(reservation) {

    console.log(reservation)

    return(
        <div className="reservations">
        <h5>Date: {reservation.reservation.date}</h5>
        <h5>Menu Item: {reservation.reservation.orders.map(order=> order.item_name)}</h5>
        </div>
    )
}

export default MyReservationList;