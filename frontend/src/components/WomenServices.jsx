import React from 'react';
import { Link } from 'react-router-dom';
import './WomenServices.css';
function WomenServices() {
    return (
        <div className="women-services-container">
            <h1 className="services-heading">Women's Services</h1>
            <div className="services-grid">
                <div className="service-item">
                    <Link to="/services/women/hair-coloring">
                        <img src="/images/women-hair-coloring.png" alt="Women Hair Coloring" />
                        <p>Hair Coloring</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/women/haircut">
                        <img src="/images/women-hair-cutting.png" alt="Women Haircut" />
                        <p>Haircut</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/women/makeup">
                        <img src="/images/women-makeup.png" alt="Women Makeup" />
                        <p>Makeup</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/women/waxing">
                        <img src="/images/women-waxing.png" alt="Women Waxing" />
                        <p>Waxing</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/women/facial">
                        <img src="/images/women-facial.png" alt="Women Facial" />
                        <p>Facial</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/women/pedicure">
                        <img src="/images/women-pedicure.png" alt="Women Pedicure" />
                        <p>Pedicure</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/women/manicure">
                        <img src="/images/women-manicure.png" alt="Women Manicure" />
                        <p>Manicure</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/women/body-spa">
                        <img src="/images/women-spa.png" alt="Women Body Spa" />
                        <p>Body Spa</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default WomenServices;