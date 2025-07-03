import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';
const serviceOptions = {
    "Hair Services": [
        { name: "Hair Wash", price: 200 },
        { name: "Hair Spa", price: 1500 },
    ],
    "Male Services": {
        "Hair Coloring": [
            { name: "Foiling", price: 2500 },
            { name: "Free-hand Painting", price: 2000 },
            { name: "Permanent Color", price: 3000 },
            { name: "ReShade", price: 4000 },
        ],
        "Haircut": [
            { name: "Classic Haircut", price: 800 },
            { name: "Modern Haircut", price: 1200 },
            { name: "Buzz Cut", price: 500 },
        ],
        "Beard Trim & Style": [
            { name: "Basic Trim", price: 500 },
            { name: "Shaping", price: 800 },
        ],
        "Shave": [
            { name: "Classic Shave", price: 600 },
            { name: "Hot Towel Shave", price: 900 },
        ],
        "Facial": [
            { name: "Deep Cleansing Facial", price: 1500 },
            { name: "Hydrating Facial", price: 1800 },
        ],
        "Makeup": [
            { name: "Concealing and Contouring", price: 1000 },
            { name: "Special Occasion Makeup", price: 1500 },
        ],
        "Body Spa": [
            { name: "Deep Tissue Massage", price: 2800 },
            { name: "Sports Massage", price: 3000 },
            { name: "Body Scrub & Polish", price: 2500 }
        ],
        "Waxing": [
            { name: "Back Waxing", price: 1500 },
            { name: "Chest Waxing", price: 1200 },
            { name: "Leg Waxing", price: 1800 }
        ]
    },
    "Female Services": {
        "Hair Coloring": [
            { name: "Balayage", price: 3500 },
            { name: "Highlights", price: 3000 },
            { name: "Full Color", price: 2800 },
        ],
        "Haircut": [
            { name: "Layered Haircut", price: 1500 },
            { name: "Bob Cut", price: 1200 },
            { name: "Pixie Cut", price: 1000 },
        ],
        "Makeup": [
            { name: "Bridal Makeup", price: 5000 },
            { name: "Party Makeup", price: 2500 },
            { name: "Everyday Makeup", price: 1500 },
        ],
        "Waxing": [
            { name: "Full Body Waxing", price: 3000 },
            { name: "Upper Lip & Eyebrow Waxing", price: 500 },
            { name: "Bikini Waxing", price: 1200 },
        ],
        "Facial": [
            { name: "Classic Facial", price: 1800 },
            { name: "Anti-Aging Facial", price: 2500 },
            { name: "Acne Treatment Facial", price: 2000 },
        ],
        "Pedicure": [
            { name: "Classic Pedicure", price: 1000 },
            { name: "Spa Pedicure", price: 1500 },
            { name: "French Pedicure", price: 900 },
        ],
        "Manicure": [
            { name: "Basic Manicure", price: 400 },
            { name: "Spa Manicure", price: 700 },
            { name: "French Manicure", price: 800 },
        ],
        "Body Spa": [
            { name: "Full Body Massage", price: 2500 },
            { name: "Body Scrub", price: 1800 },
            { name: "Aroma Therapy", price: 2200 },
            { name: "Swedish Massage", price: 2500 },
        ]
    }
};
import axios from 'axios';
function BookingForm() {
    const [gender, setGender] = useState('');
    const [service, setService] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [options, setOptions] = useState([]);
    const [price, setPrice] = useState(0);
    const [availableServices, setAvailableServices] = useState([]);
    const navigate = useNavigate();
    const today = new Date().toISOString().split('T')[0];
    const getAvailableServices = useCallback((selectedGender) => {
        if (selectedGender === 'Male') {
            return ["Hair Services", "Makeup Services", "Facial", "Hair Coloring", "Haircut", "Shave", "Beard Trim & Style", "Waxing", "Body Spa"];
        } else if (selectedGender === 'Female') {
            return ["Hair Services", "Makeup Services", "Facial", "Hair Coloring", "Haircut", "Waxing", "Pedicure", "Manicure", "Body Spa"];
        }
        return [];
    }, []);
    useEffect(() => {
        const services = getAvailableServices(gender);
        setAvailableServices(services);
        setService(''); 
        setSelectedOption('');
        setOptions([]);
    }, [gender, getAvailableServices]);
    const getServiceOptions = useCallback((selectedGender, selectedService) => {
        if (!selectedService) return [];
        let serviceGroup;
        if (selectedGender === 'Male') {
            serviceGroup = serviceOptions["Male Services"][selectedService] || (selectedService === "Hair Services" ? serviceOptions["Hair Services"] : []);
        } else if (selectedGender === 'Female') {
            serviceGroup = serviceOptions["Female Services"][selectedService] ||
                (selectedService === "Hair Services" ? serviceOptions["Hair Services"] : []) ||
                (selectedService === "Pedicure" ? serviceOptions["Female Services"]["Pedicure"] : []) ||
                (selectedService === "Manicure" ? serviceOptions["Female Services"]["Manicure"] : []);
        } else {
            serviceGroup = serviceOptions[selectedService] || [];
        }
        return serviceGroup;
    }, []);
    useEffect(() => {
        const newOptions = getServiceOptions(gender, service);
        setOptions(newOptions);
        setSelectedOption('');
        setPrice(0);
    }, [service, gender, getServiceOptions]);
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleServiceChange = (event) => setService(event.target.value);
    const handleDateChange = (event) => setBookingDate(event.target.value);
    const handleTimeChange = (event) => setBookingTime(event.target.value);
    const handleAddressChange = (event) => setAddress(event.target.value);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        const selected = options.find(opt => opt.name === event.target.value);
        setPrice(selected ? selected.price : 0);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!gender || !service || !selectedOption || !bookingDate || !bookingTime || !address) {
            setError('Please fill in all the fields.');
            setConfirmation('');
            return;
        }
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signin');
            return;
        }
        try {
            const dateTime = `${bookingDate}T${bookingTime}`;         
            const bookingData = {
                gender,
                serviceName: service,
                serviceOption: selectedOption,
                price,
                bookingDate: dateTime,
                bookingTime,
                address,
                status: 'Confirmed' 
            };
            console.log('Submitting booking data:', bookingData);
            const response = await axios.post('http://localhost:5000/api/bookings', bookingData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log('Booking response:', response.data);
            setConfirmation('Booking submitted successfully!');
            setError('');
            setTimeout(() => {
                navigate('/account');
            }, 2000);           
            resetForm();
        } catch (err) {
            console.error('Error creating booking:', err);
            setError(err.response?.data?.error || 'Failed to create booking. Please try again.');
            setConfirmation('');
        }
    };
    const resetForm = () => {
        setGender('');
        setService('');
        setSelectedOption('');
        setBookingDate('');
        setBookingTime('');
        setAddress('');
        setPrice(0);
    };
    return (
        <div className="booking-form-container">
          <div className="booking-form">
            <h2>Book a Slot</h2>
            {error && <p className="error-message">{error}</p>}
            {confirmation && <p className="success-message">{confirmation}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="gender">Choose Gender:</label>
                    <select id="gender" value={gender} onChange={handleGenderChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="service">Select a Service:</label>
                    <select id="service" value={service} onChange={handleServiceChange}>
                        <option value="">Select Service</option>
                        {availableServices.map((serviceName) => (
                            <option key={serviceName} value={serviceName}>
                                {serviceName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="serviceOption">Select an Option:</label>
                    <select id="serviceOption" value={selectedOption} onChange={handleOptionChange} disabled={!service}>
                        <option value="">Select Option</option>
                        {options.map((option) => (
                            <option key={option.name} value={option.name}>
                                {option.name} - ${option.price}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="bookingDate">Select Date:</label>
                    <input
                        type="date"
                        id="bookingDate"
                        value={bookingDate}
                        onChange={handleDateChange}
                        min={today}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bookingTime">Select Time:</label>
                    <input
                        type="time"
                        id="bookingTime"
                        value={bookingTime}
                        onChange={handleTimeChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Your Address</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={handleAddressChange}
                        rows="3"
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    );
}
export default BookingForm;