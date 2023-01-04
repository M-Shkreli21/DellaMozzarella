import React, { useState, useEffect } from 'react';
import MenuRender from "./MenuRender";

function Menu(){

    const [menu, setMenus] = useState([])

    useEffect(() => {
        fetch('/menu_items')
        .then(response => response.json())
        .then(data => setMenus(data))
      }, [])
      
    const menu_render = menu.map((menu) => {
        return <MenuRender key={menu.id} menu={menu}/>
    })

    return(
    <div className='MenuContainer'>
    <h1>DellaMozarella Catering Menu</h1>
    {menu_render}
    </div>
)}

export default Menu;