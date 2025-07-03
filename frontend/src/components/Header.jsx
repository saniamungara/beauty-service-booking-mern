import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
function Header({ isLoggedIn, handleLogout }) {
    console.log("isLoggedIn prop in Header:", isLoggedIn);
    const navigate = useNavigate();
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const toggleServicesDropdown = () => {
        setServicesDropdownOpen(!servicesDropdownOpen);
    };
    return (
        <header className="header">
            <div className="container">
                <div className="logo">Blushify</div>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <div className="services-dropdown">
                        <button onClick={toggleServicesDropdown}>Services</button>
                        {servicesDropdownOpen && (
                            <div className="services-dropdown-content">
                                <Link to="/services/men">Men</Link>
                                <Link to="/services/women">Women</Link>
                            </div>
                        )}
                    </div>
                    {isLoggedIn ? (
                        <>
                            <Link to="/account">My Account</Link>
                            <span onClick={handleLogout} className="logout-link">Logout</span>
                        </>
                    ) : (
                        <>
                            <Link to="/signin">Sign In</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}
export default Header;