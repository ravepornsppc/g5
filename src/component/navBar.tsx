import React from 'react';
import '../style/Navbar.css';
// import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <ul className="navbar-links">
                <li>Home</li>
                <li>TodoApp</li>

            </ul>
        </nav>
    );
}

export default Navbar;