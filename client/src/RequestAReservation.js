import React, { useState } from 'react';

function RequestAReservation({user, setUser}){

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [error, setError] = useState('')

    const [itemName, setItemName] = useState("All")
    const [reservation, setReservation] = useState('')

    function clearForm() {
        setDate('')
        setTime('')
        setItemName('')
        setReservation('')
    }

    function addDate(e) {
        setDate(e.target.value)
    }
    function addTime(e) {
        setTime(e.target.value)
    }
    function addItemName(e) {
        setItemName(e.target.value)
    }

    function submitReservation() {
        const newReservation = {
            date: date,
            time: time,
            user_id: user.id
        }
        fetch('/reservations', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newReservation)
        })
        .then(response => response.json())
        .then(data => { 
            console.log(data) 
            submitOrder(data)
        })
    }

    function submitOrder(data) {
        const newOrder = {
            item_name: itemName,
            user_id: user.id,
            reservation_id: data.id,
        }
        fetch('orders', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newOrder)
        })
    }

    function handleFullOrderSubmit(e) {
        e.preventDefault()
        submitReservation()
    }

    return(
    <div>
        <div className="reservation_form">
            <form onSubmit={handleFullOrderSubmit}>
                <p style={{color: 'red'}}>{error ? error : null}</p>
                <h2>New Reservation & Order Request</h2>
                <input type="text" onChange={addDate} value={date} placeholder="Please Enter Date (MM/DD/YYYY)" />
                <br></br>
                <select name="Select Menu Item" onChange={addItemName} value={itemName}>
                    <option value="All">Please Select a Menu Item</option>
                    <option value="Fresh Mozzarella">Fresh Mozzarella</option>
                    <option value="Chicken Parmesan">Chicken Parmesan</option>
                    <option value="Chicken Francese">Chicken Francese</option>
                    <option value="Penne Vodka">Penne Vodka</option>
                    <option value="Gnocchi Bolognese">Gnocchi Bolognese</option>
                    <option value="Fried Calamari">Fried Calamari</option>
                </select>
                <br></br>
                <input type="submit" value="Send Reservation Request" />
            </form>
        </div>
    </div>
)}

export default RequestAReservation;