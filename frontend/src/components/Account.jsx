import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './Account.css';
const API_BASE_URL = 'http://localhost:5000/api'; 
function ProfileEditor({ userData, onSave, onCancel, errors, setErrors }) {
    const [formData, setFormData] = useState({
        name: userData?.name || '',
        email: userData?.email || '',
        phone: userData?.phone || '',
        address: userData?.address || ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSave(formData);
        }
    };
    return (
        <div className="profile-editor">
            <h3>{userData ? 'Edit' : 'Complete'} Your Profile</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>       
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>                
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        rows={3}
                    ></textarea>
                    {errors.address && <span className="error-text">{errors.address}</span>}
                </div>               

                <div className="button-group">
                    <button type="submit" className="save-button">Save Information</button>
                    {userData && (
                        <button type="button" className="cancel-button" onClick={onCancel}>
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
// Main MyAccount Component
function MyAccount() {
    const [userData, setUserData] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
        const fetchUserData  = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/signin');
                return;
            }
            try {
                setLoading(true);
                // Fetch user data
                const userResponse = await axios.get(`${API_BASE_URL}/users/user`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log('User data response:', userResponse.data);
                // If user has no profile info yet, immediately show edit form
                if (!userResponse.data || Object.keys(userResponse.data).length === 0) {
                    setUserData(null);
                    setIsEditing(true);
                } else {
                    setUserData(userResponse.data);
                }
                // Fetch bookings data
                const bookingsResponse = await axios.get(`${API_BASE_URL}/bookings/me`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log('Bookings response:', bookingsResponse.data); 
                const formattedBookings = bookingsResponse.data.map(booking => ({
                    id: booking.id || booking._id,
                    _id: booking._id,
                    bookingDate: booking.bookingDate,
                    services: [booking.serviceOption || booking.serviceName], // Convert to array expected by UI
                    status: booking.status || 'Confirmed' // Default status if not provided
                }));
                console.log('Formatted bookings:', formattedBookings);
                setBookings(formattedBookings);
                setError('');
            } catch (err) {
                console.error('Error fetching data:', err);
                // Handle case where user exists but has no profile yet
                if (err.response?.status === 404 && (
                    err.response?.data?.error === 'User profile not found' ||
                    err.response?.data?.message === 'User profile not found'
                )) {
                    setUserData(null);
                    setIsEditing(true);
                } else {
                    setError('Failed to load user data. Please try again later.');
                }
            } finally {
                setLoading(false);
            }
        };
        useEffect(() => {
            fetchUserData();
        }, [navigate]);
    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };
    // Function to format time
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };
    // Handle profile save
    const handleProfileSave = async (formData) => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signin');
            return;
        }
        try {
            setLoading(true); 
            let response;
            console.log('Saving profile data:', formData);
            // Determine if this is a create or update operation
            if (userData) {
                // Update existing profile
                response = await axios.put(`${API_BASE_URL}/users/user`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUpdateSuccess('Profile updated successfully!');
            } else {
                // Create new profile
                response = await axios.post(`${API_BASE_URL}/users/user`, formData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUpdateSuccess('Profile created successfully!');
            }
            console.log('Save profile response:', response.data);
            if (response.data && Object.keys(response.data).length > 0) {
                //setUserData(response.data);
                await fetchUserData();
            } else {
                // If not, refetch the user data
                fetchUserData();
            }
            setIsEditing(false);
            // Clear success message after 3 seconds
            setTimeout(() => {
                setUpdateSuccess('');
            }, 3000);
        } catch (err) {
        console.error('Error saving profile:', err);
        if (err.response && err.response.data && err.response.data.errors) {
          const apiErrors = {};
          err.response.data.errors.forEach(error => {
            apiErrors[error.param] = error.msg;
          });
          setErrors(apiErrors);
        } else {
          setError('Failed to save profile information. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };
    const handleCancelBooking = async (bookingId) => {
        try {
          const token = localStorage.getItem('token'); // or however you store it
          const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}/cancel`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
          const data = await response.json();
      if (response.ok) {
        alert('Booking cancelled successfully!');
        setBookings((prev) =>
            prev.map((b) =>
              b.id === bookingId ? { ...b, status: 'Cancelled' } : b
            )
        );
      } else {
        alert(data.error || 'Failed to cancel booking');
      }
        } catch (error) {
          console.error('Error cancelling booking:', error);
          alert('Error cancelling booking');
        }
      };
    // Handle booking button click
    const handleNewBooking = () => {
        navigate('/bookingform');
    };
    if (loading) {
        return <div className="loading">Loading your account information...</div>;
    }
    return (
        <div className="my-account-container">
            <h1>My Account</h1>   
            {error && <div className="error-message">{error}</div>}
            {updateSuccess && <div className="success-message">{updateSuccess}</div>}  
            <div className="account-sections-container">
                <section className="personal-info-section">
                    {isEditing ? (
                        <ProfileEditor 
                            userData={userData} 
                            onSave={handleProfileSave} 
                            onCancel={() => setIsEditing(false)} 
                            errors={errors}
                            setErrors={setErrors}
                        />
                    ) : (
                        userData ? (
                            <>
                                <h2>Personal Information</h2>
                                <div className="info-grid">
                                    <div className="info-label">Name:</div>
                                    <div className="info-value">{userData.name}</div>
                                    <div className="info-label">Email:</div>
                                    <div className="info-value">{userData.email}</div>                                    
                                    <div className="info-label">Phone:</div>
                                    <div className="info-value">{userData.phone}</div>                                   
                                    <div className="info-label">Address:</div>
                                    <div className="info-value">{userData.address}</div>
                                </div>
                                <button className="edit-button" onClick={() => setIsEditing(true)}>
                                    Edit Information
                                </button>
                            </>
                        ) : (
                            <>
                                <h2>Complete Your Profile</h2>
                                <p>Please add your personal information to continue.</p>
                                <button className="edit-button" onClick={() => setIsEditing(true)}>
                                    Add Information
                                </button>
                            </>
                        )
                    )}
                </section>               
                <section className="bookings-section">
                    <h2>My Bookings</h2>                   
                    {bookings.length === 0 ? (
                        <p>You have no bookings yet.</p>
                    ) : (
                        <div className="bookings-table">
                            <div className="bookings-header">
                                <div className="booking-col">Date</div>
                                <div className="booking-col">Time</div>
                                <div className="booking-col">Services</div>
                                <div className="booking-col">Status</div>
                                <div className="booking-col">Actions</div>
                            </div>                         
                            {bookings.map((booking) => (
                                <div key={booking.id} className="booking-row">
                                    <div className="booking-col">{formatDate(booking.bookingDate)}</div>
                                    <div className="booking-col">{formatTime(booking.bookingDate)}</div>
                                    <div className="booking-col">{booking.services.join(', ')}</div>
                                    <div className="booking-col">{booking.status}</div>
                                    <div className="booking-col">
                                        {booking.status !== 'Cancelled' && (
                                            <button 
                                                className="cancel-booking-button"
                                                onClick={() => handleCancelBooking(booking._id)}
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    <button className="new-booking-button" onClick={() => navigate('/booking')}>
                        New Booking
                    </button>
                </section>
            </div>
        </div>
    );
}

export default MyAccount;
