import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function WomenPedicureDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/women" className="back-link">Back to Women's Services</Link>
            <h1>Pedicure</h1>
            <p>
                Treat your feet to our luxurious pedicure services.
            </p>
            <ul>
                <li><strong>Classic Pedicure</strong> - from ₹ 1,000</li>
                <li><strong>Spa Pedicure</strong> - from ₹ 1,500</li>
                <li><strong>French Pedicure</strong> - from ₹ 900</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default WomenPedicureDetails;
