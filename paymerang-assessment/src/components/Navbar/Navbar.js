import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {


    render() {
        return (
            <nav className="navbar">
                <a class="navbar-brand mb-0 h-1" href="#">
                    <img src="buy.png" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                        Paymerang
                </a>            
            </nav>
            )
    }
}

export default Navbar;