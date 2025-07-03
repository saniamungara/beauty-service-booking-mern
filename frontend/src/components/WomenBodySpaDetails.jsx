import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function WomenBodySpaDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/women" className="back-link">Back to Women's Services</Link>
            <h1>Body Spa</h1>
            <p>
                Indulge in our relaxing and rejuvenating body spa treatments.
            </p>
            <ul>
                <li><strong>Full Body Massage</strong> - from ₹ 2,500</li>
                <li><strong>Body Scrub</strong> - from ₹ 1,800</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default WomenBodySpaDetails;