import React from "react";
import './NavBar.css';
import cart from './carrito.svg'
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to="/Cart">
            
            <img src={cart} alt="" />
        </Link>
    )
}

export default CartWidget;
