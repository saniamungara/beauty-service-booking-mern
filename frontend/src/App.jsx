import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MenServices from './components/MenServices';
import WomenServices from './components/WomenServices';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import BookingForm from './components/BookingForm';
import Account from './components/Account';
// Import service detail components
import MenHairColoringDetails from './components/MenHairColoringDetails';
import MenHaircutDetails from './components/MenHaircutDetails';
import MenBeardTrimDetails from './components/MenBeardTrimDetails';
import MenShaveDetails from './components/MenShaveDetails';
import MenFacialDetails from './components/MenFacialDetails';
import MenMakeupDetails from './components/MenMakeupDetails';
import MenBodySpaDetails from './components/MenBodySpaDetails';
import MenWaxingDetails from './components/MenWaxingDetails';
import WomenHairColoringDetails from './components/WomenHairColoringDetails';
import WomenHaircutDetails from './components/WomenHaircutDetails';
import WomenMakeupDetails from './components/WomenMakeupDetails';
import WomenWaxingDetails from './components/WomenWaxingDetails';
import WomenFacialDetails from './components/WomenFacialDetails';
import WomenPedicureDetails from './components/WomenPedicureDetails';
import WomenManicureDetails from './components/WomenManicureDetails';
import WomenBodySpaDetails from './components/WomenBodySpaDetails';
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    useEffect(() => {
      localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);
    const handleLogout = () => {
      console.log('Logout clicked');
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      console.log('isLoggedIn after logout:', false);
    };
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/men" element={<MenServices />} />
        <Route path="/services/women" element={<WomenServices />} />
        <Route path="/signin" element={<SignIn onLogin={handleLogin} />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/account" element={<Account />} />
        {/* Men's service detail routes */}
        <Route path="/services/men/hair-coloring" element={<MenHairColoringDetails />} />
        <Route path="/services/men/haircut" element={<MenHaircutDetails />} />
        <Route path="/services/men/beard-trim" element={<MenBeardTrimDetails />} />
        <Route path="/services/men/shave" element={<MenShaveDetails />} />
        <Route path="/services/men/facial" element={<MenFacialDetails />} />
        <Route path="/services/men/makeup" element={<MenMakeupDetails />} />
        <Route path="/services/men/body-spa" element={<MenBodySpaDetails />} />
        <Route path="/services/men/waxing" element={<MenWaxingDetails />} />
        {/* Women's service detail routes */}
        <Route path="/services/women/hair-coloring" element={<WomenHairColoringDetails />} />
        <Route path="/services/women/haircut" element={<WomenHaircutDetails />} />
        <Route path="/services/women/makeup" element={<WomenMakeupDetails />} />
        <Route path="/services/women/waxing" element={<WomenWaxingDetails />} />
        <Route path="/services/women/facial" element={<WomenFacialDetails />} />
        <Route path="/services/women/pedicure" element={<WomenPedicureDetails />} />
        <Route path="/services/women/manicure" element={<WomenManicureDetails />} />
        <Route path="/services/women/body-spa" element={<WomenBodySpaDetails />} />
      </Routes>
    </Router>
  );
}
export default App;