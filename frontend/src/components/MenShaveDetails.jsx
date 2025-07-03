import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function MenShaveDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/men" className="back-link">Back to Men's Services</Link>
            <h1>Shave</h1>
            <p>Experience a smooth and comfortable shave with our expert barbers.</p>
            <ul>
                <li><strong>Classic Shave</strong> - from ₹ 600</li>
                <li><strong>Hot Towel Shave</strong> - from ₹ 900</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default MenShaveDetails;