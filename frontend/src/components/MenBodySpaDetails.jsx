import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function MenBodySpaDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/men" className="back-link">Back to Men's Services</Link>
            <h1>Men's Body Spa</h1>
            <p>
                Relax and rejuvenate with our tailored body spa treatments for men.
            </p>
            <ul>
                <li><strong>Deep Tissue Massage</strong> - from ₹ 2,800</li>
                <li><strong>Sports Massage</strong> - from ₹ 3,000</li>
                <li><strong>Body Scrub & Polish</strong> - from ₹ 2,500</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default MenBodySpaDetails;
