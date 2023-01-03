import React from'react';
// import ReactDOM from'react-dom';
import SideBar from './SideBar.js';
import Logo2 from './Frankie Front Logo 2.PNG'

function Home() {
    return (
        <div>
        <SideBar/>
        <div className='Introduction'>
        <h1>Welcome to DellaMozzarella</h1>
        <p className='intro_content'>When I was a young boy I always loved to work in my fathers Pizzaria, I was always fascinated by my fathers ability to create food that everyone loved. As time passed I learned the intricacies of Italian cuisine</p>
        <p className='intro_content'>As a result of my love for food, I decided I would pursue a business in creating food that my cleints would love. I learned the in's and out's of creating great tasting fresh mozarella as well as many other italian dishes</p>
        <p className='intro_content'>Through my experience I have truly fell in love with the art of cooking and now I get to help people enjoy the food that my family has been making my whole life</p>
        <p className='intro_content'>Here at DellaMozzarella, we strive to help each client with any events that they plan. For reservations or inquiries please reach out to us. Our contact information is located in the "Contact Us" tab.</p>
        <br></br>
        <img className='logo2' src={Logo2}/>
        </div>
        </div> 
        )
}

export default Home