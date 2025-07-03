import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function MenBeardTrimDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/men" className="back-link">Back to Men's Services</Link>
            <h1>Beard Trim</h1>
            <p>Maintain a well-groomed beard with our professional trimming services.</p>
            <ul>
                <li><strong>Basic Trim</strong> - from ₹ 500</li>
                <li><strong>Shaping</strong> - from ₹ 800</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default MenBeardTrimDetails;