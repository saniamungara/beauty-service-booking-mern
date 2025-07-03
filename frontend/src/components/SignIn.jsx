import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css';
function SignIn({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email: email.trim().toLowerCase(),
                password: password.trim(),
            });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('name', response.data.name);
                if (onLogin) {
                    onLogin();
                }
                navigate('/');
            } else {
                setError(response.data.error || 'Login failed.');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred.');
            console.error(err);
        }
    };
    return (
        <div className="sign-in-container">
            <form onSubmit={handleSubmit} className="sign-in-form">
                <h2>Sign in to your account</h2>
                {error && <p className="error-message">{error}</p>}
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
                <button type="submit" className="sign-in-button">Sign In</button>
                <p className="signup-link">
                    Don't have an account yet? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
}
export default SignIn;