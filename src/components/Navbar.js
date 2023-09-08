import React from 'react';
import Logo from './Logo.png';

function Navbar() {
       
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top ">
            <div className="container">
                <a href="#" className="navbar-brand d-flex justify-content-between align-items-center order-lg-0">
                    <img src={Logo} alt="logo" width={60} height={30} className="img-thumbnail border-0" />
                </a>

                <div class = "order-lg-2 nav-btns">
                    <button type = "button" class = "btn position-relative">
                        <i class = "fa fa-shopping-cart icon"></i>
                        <span class = "position-absolute top-0 start-100 translate-middle badge bg-primary"></span>
                    </button>
                    <button type = "button" class = "btn position-relative">
                        <i class = "fa fa-heart icon"></i>
                        <span class = "position-absolute top-0 start-100 translate-middle badge bg-primary"></span>
                    </button>
                </div>
                <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                    <span class = "navbar-toggler-icon"></span>
                </button>

                <div class = "collapse navbar-collapse order-lg-1" id = "navMenu">
                    <ul class = "navbar-nav mx-auto text-center">
                        <li class = "nav-item px-2 py-2">
                            <a class = "nav-link text-uppercase text-dark" href = "#home">home</a>
                        </li>
                        <li class = "nav-item px-2 py-2">
                            <a class = "nav-link text-uppercase text-dark" id="masculino" href = "#masculino">masculino</a>
                        </li>
                        <li class = "nav-item px-2 py-2">
                            <a class = "nav-link text-uppercase text-dark" href = "#feminino">feminino</a>
                        </li>
                        <li class = "nav-item px-2 py-2">
                            <a class = "nav-link text-uppercase text-dark" href = "#infantil">infantil</a>
                        </li>
                        <li class = "nav-item px-2 py-2">
                            <a class = "nav-link text-uppercase text-dark" href = "#popular">popular</a>
                        </li>
                        <li class = "nav-item px-2 py-2 border-0">
                            <a class = "nav-link text-uppercase text-dark" href = "#sobre-nos">sobre nós</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;