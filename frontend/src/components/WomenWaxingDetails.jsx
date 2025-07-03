 import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function WomenWaxingDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/women" className="back-link">Back to Women's Services</Link>
            <h1>Women's Waxing</h1>
            <p>
                Achieve smooth and flawless skin with our gentle waxing services.
            </p>
            <ul>
                <li><strong>Full Body Waxing</strong> - from ₹ 3,000</li>
                <li><strong>Upper Lip & Eyebrow Waxing</strong> - from ₹ 500</li>
                <li><strong>Bikini Waxing</strong> - from ₹ 1,200</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default WomenWaxingDetails;
