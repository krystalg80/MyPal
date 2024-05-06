import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="buttons-container">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/features" className="nav-link">Features</Link>
                    <Link to="/buynow" className="nav-link">Coming Soon...</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
