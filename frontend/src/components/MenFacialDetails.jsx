import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function MenFacialDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/men" className="back-link">Back to Men's Services</Link>
            <h1>Men's Facial</h1>
            <p>Revitalize your skin with our customized facial treatments.</p>
            <ul>
                <li><strong>Deep Cleansing Facial</strong> - from ₹ 1,500</li>
                <li><strong>Hydrating Facial</strong> - from ₹ 1,800</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default MenFacialDetails;