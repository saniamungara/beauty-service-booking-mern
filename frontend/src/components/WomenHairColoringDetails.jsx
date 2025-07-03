import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function WomenHairColoringDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/women" className="back-link">Back to Women's Services</Link>
            <h1>Women's Hair Coloring</h1>
            <p>
                Discover vibrant hair colors and expert techniques tailored to your style.
            </p>
            <ul>
                <li><strong>Balayage</strong> - from ₹ 3,500</li>
                <li><strong>Highlights</strong> - from ₹ 3,000</li>
                <li><strong>Full Color</strong> - from ₹ 2,800</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default WomenHairColoringDetails;