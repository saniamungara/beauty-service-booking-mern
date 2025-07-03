import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import homeImage from '/images/home.jpg';
function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const handleSignUp = () => {
    navigate('/signup');
  };
  const handleBooking = () => {
    if (isLoggedIn) {
      navigate('/booking');
    } else {
      alert('Please sign in to book a service.');
      navigate('/signin');
    }
  };
  return (
    <div className="home">
      <img src={homeImage} alt="beauty services" className="home-image" />
      <div className="home-content">
        <h1>Effortless Beauty Bookings with Premium Services</h1>
        <p>Experience the convenience of scheduling your beauty appointments online, exploring a wide range of services designed to meet your needs.</p>
        <button className="signup-button" onClick={isLoggedIn ? handleBooking : handleSignUp}>
          {isLoggedIn ? 'Book a Slot' : 'Sign Up for Booking'}
        </button>
      </div>
    </div>
  );
}
export default Home;