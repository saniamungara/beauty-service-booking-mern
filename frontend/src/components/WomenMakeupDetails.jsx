import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function WomenMakeupDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/women" className="back-link">Back to Women's Services</Link>
            <h1>Women's Makeup</h1>
            <p>
                Get ready to shine with our professional makeup services for any occasion.
            </p>
            <ul>
                <li><strong>Bridal Makeup</strong> - from ₹ 5,000</li>
                <li><strong>Party Makeup</strong> - from ₹ 2,500</li>
                <li><strong>Everyday Makeup</strong> - from ₹ 1,500</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default WomenMakeupDetails;