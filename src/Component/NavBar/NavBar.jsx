import React from "react";
import './NavBar.css'



// Components+-
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";


const NavBar = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-xl">
        <Link className="navbar-brand" to="/">Bike Tour</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Bike
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to={`/Categoria/Mountain`}>Mountain</Link></li>
                            <li><Link className="dropdown-item" to={`/Categoria/Route`}>Route</Link></li>
                                                    </ul>
                    </li>
                    </ul>
            </div>
            <CartWidget />
        </div>
    </nav>
        
    )
}

export default NavBar;