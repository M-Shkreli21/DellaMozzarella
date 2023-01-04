import React from 'react';

function MyReservationList(reservation) {

    console.log(reservation)

    return(
        <div>
        <h4>If Changes to Reservations are needed please call the number located in the "Contact Us" tab</h4>
        <h5>Date: {reservation.reservation.date}</h5>
        <h5>Menu Item: {reservation.reservation.orders.map(order=> order.item_name)}</h5>
        </div>
    )
}

export default MyReservationList;