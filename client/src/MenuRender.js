import React from 'react';

function MenuRender(menu) {

    return(
        <div>
        <h3>{menu.menu.menu_item_name}</h3>
        <h5 className='ingredients'>Ingredients: {menu.menu.ingredients}</h5>
        <h5 className='ingredients'>$ {menu.menu.price}</h5>
        </div>
    )
}

export default MenuRender;