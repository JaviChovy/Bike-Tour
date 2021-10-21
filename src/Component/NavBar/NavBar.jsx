import React from "react";
import './NavBar.css'



// Components
import CartWidget from "./CartWidget"




const NavBar = () => {

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-xl">
        <a class="navbar-brand" href="#">Bike Tour</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Mountain Bike
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">26'</a></li>
                            <li><a class="dropdown-item" href="#">27,5'</a></li>
                            <li><a class="dropdown-item" href="#">29'</a></li>
                            <li><a class="dropdown-item" href="#">Kids</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Route Bike
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">26'</a></li>
                            <li><a class="dropdown-item" href="#">27,5'</a></li>
                            <li><a class="dropdown-item" href="#">29'</a></li>
                            <li><a class="dropdown-item" href="#">Kids</a></li>
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