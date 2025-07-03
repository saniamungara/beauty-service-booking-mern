import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function MenHaircutDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/men" className="back-link">Back to Men's Services</Link>
            <h1>Men's Haircut</h1>
            <p>Get a stylish haircut tailored to your preferences.</p>
            <ul>
                <li><strong>Classic Haircut</strong> - from ₹ 800</li>
                <li><strong>Modern Haircut</strong> - from ₹ 1,200</li>
                <li><strong>Buzz Cut</strong> - from ₹ 500</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default MenHaircutDetails;
