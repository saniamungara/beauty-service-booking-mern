import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function WomenHaircutDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/women" className="back-link">Back to Women's Services</Link>
            <h1>Women's Haircut</h1>
            <p>
                Experience a haircut that complements your personality and style.
            </p>
            <ul>
                <li><strong>Layered Haircut</strong> - from ₹ 1,500</li>
                <li><strong>Bob Cut</strong> - from ₹ 1,200</li>
                <li><strong>Pixie Cut</strong> - from ₹ 1,000</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default WomenHaircutDetails;