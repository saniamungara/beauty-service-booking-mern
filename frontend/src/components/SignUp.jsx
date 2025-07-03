import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                name: name,
                email: email.trim().toLowerCase(),
                password: password.trim(),
            });
            if (response.status === 200) {
                navigate('/signin');
            } else {
                setError(response.data.error || 'Signup failed.');
            }
        } catch (err) {
            console.log("Backend error response:", err.response.data); 
            if (err.response && err.response.data && err.response.data.errors) {
                const errorMessages = err.response.data.errors.map(error => error.msg).join(', ');
                setError(errorMessages);
            } else if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else {
                setError('An error occurred.');
            }     
            console.error(err);
        }
    };
    return (
        <div className="sign-up-container">
            <form onSubmit={handleSubmit} className="sign-up-form">
                <h2>Create your account</h2>
                {error && <p className="error-message">{error}</p>}
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="sign-up-button">Sign Up</button>
                <p className="signin-link">
                    Already have an account? <Link to="/signin">Sign in</Link>
                </p>
            </form>
        </div>
    );
}
export default SignUp;
