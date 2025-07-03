import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function WomenManicureDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/women" className="back-link">Back to Women's Services</Link>
            <h1>Manicure</h1>
            <p>
                Get perfectly manicured nails with our expert services.
            </p>
            <ul>
                <li><strong>Basic Manicure</strong> - from ₹ 400</li>
                <li><strong>Spa Manicure</strong> - from ₹ 700</li>
                <li><strong>French Manicure</strong> - from ₹ 800</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default WomenManicureDetails;