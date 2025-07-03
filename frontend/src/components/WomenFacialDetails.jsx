import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function WomenFacialDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/women" className="back-link">Back to Women's Services</Link>
            <h1>Women's Facial</h1>
            <p>
                Pamper your skin with our rejuvenating facial treatments.
            </p>
            <ul>
                <li><strong>Classic Facial</strong> - from ₹ 1,800</li>
                <li><strong>Anti-Aging Facial</strong> - from ₹ 2,500</li>
                <li><strong>Acne Treatment Facial</strong> - from ₹ 2,000</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default WomenFacialDetails;