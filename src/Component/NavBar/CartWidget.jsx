import React from "react";
import './NavBar.css';
import cart from './carrito.svg'

const CartWidget = () => {
    return (
        <a href="/Cart">
            
            <img src={cart} alt="" srcset="" />
        </a>
    )
}

export default CartWidget;
