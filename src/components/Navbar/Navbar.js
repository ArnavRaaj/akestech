import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="nav-home">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-products">
                <Link to="/products">Products</Link>
            </div>
        </div>
    )
}

export default Navbar
