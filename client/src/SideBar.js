import React from 'react';
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function SideBar() {
    return(
        <div className='sidebar'>
            <h3>Socials</h3>
            <SocialIcon url="https://instagram.com/frankiedellamozzarella"/>@frankiedellamozzarella
            <SocialIcon url="https://www.facebook.com/frankiedellamozzarella"/>@FrankieDellaMozzarella
            <SocialIcon url="https://tiktok.com/@frankiedellamozzarella" />@frankiedellamozzarella
        </div>
    )
}

export default SideBar