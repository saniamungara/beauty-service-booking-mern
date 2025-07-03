import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function MenMakeupDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/men" className="back-link">Back to Men's Services</Link>
            <h1>Men's Makeup</h1>
            <p>Enhance your features with our professional makeup services for men.</p>
            <ul>
                <li><strong>Concealing and Contouring</strong> - from ₹ 1,000</li>
                <li><strong>Special Occasion Makeup</strong> - from ₹ 1,500</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default MenMakeupDetails;