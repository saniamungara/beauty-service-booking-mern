import React from 'react';
import { Link } from 'react-router-dom';
import './MenServices.css';
function MenServices() {
    return (
        <div className="men-services-container">
            <h1 className="services-heading">Men's Services</h1>
            <div className="services-grid">
                <div className="service-item">
                    <Link to="/services/men/hair-coloring">
                        <img
                            src="/images/men-hair-coloring.png"
                            alt="Men Hair Coloring"
                            width="600" 
                            height="400"
                        />
                        <p>Hair Coloring</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/men/haircut">
                        <img
                            src="/images/men-haircut.png"
                            alt="Men Haircut"
                            width="600"
                            height="400"
                        />
                        <p>Haircut</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/men/beard-trim">
                        <img
                            src="/images/men-beard-trim.png"
                            alt="Men Beard Trim"
                            width="600"
                            height="400"
                        />
                        <p>Beard Trim</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/men/shave">
                        <img
                            src="/images/men-shave.png"
                            alt="Men Shave"
                            width="600"
                            height="400"
                        />
                        <p>Shave</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/men/facial">
                        <img
                            src="/images/men-facial.png"
                            alt="Men Facial"
                            width="600"
                            height="400"
                        />
                        <p>Facial</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/men/makeup">
                        <img
                            src="/images/men-makeup.png"
                            alt="Men Makeup"
                            width="600"
                            height="400"
                        />
                        <p>Makeup</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/men/body-spa">
                        <img
                            src="/images/men-body-spa.png"
                            alt="Men Body Spa"
                            width="600"
                            height="400"
                        />
                        <p>Body Spa</p>
                    </Link>
                </div>
                <div className="service-item">
                    <Link to="/services/men/waxing">
                        <img
                            src="/images/men-waxing.png"
                            alt="Men Waxing"
                            width="600"
                            height="400"
                        />
                        <p>Waxing</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default MenServices;