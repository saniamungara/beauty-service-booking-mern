import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';
function MenHairColoringDetails() {
    return (
        <div className="service-details-container">
            <Link to="/services/men" className="back-link">Back to Men's Services</Link>
            <h1>Men's Hair Coloring</h1>
            <p>
                Men, times have changed. And so have your professional color options. Prices vary depending upon the level of your Stylist.
            </p>
            <ul>
                <li><strong>Foiling</strong> - from ₹ 2,500</li>
                <li><strong>Free-hand Painting</strong> - from ₹ 2,000</li>
                <li><strong>Permanent Color</strong> - from ₹ 3,000</li>
                <li><strong>ReShade</strong> - from ₹ 4,000</li>
            </ul>
            <p className="booking-info">
                <span role="img" aria-label="info">ℹ️</span> Booking is available only for authenticated customers. If you want to book
                an appointment <Link to="/signin">click for sign in</Link>.
            </p>
        </div>
    );
}
export default MenHairColoringDetails;