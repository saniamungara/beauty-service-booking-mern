import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function MenWaxingDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/men" className="back-link">Back to Men's Services</Link>
            <h1>Men's Waxing</h1>
            <p>
                Achieve smooth and clean skin with our professional waxing services for men.
            </p>
            <ul>
                <li><strong>Back Waxing</strong> - from ₹ 1,500</li>
                <li><strong>Chest Waxing</strong> - from ₹ 1,200</li>
                <li><strong>Leg Waxing</strong> - from ₹ 1,800</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default MenWaxingDetails;