// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ServiceCards from './Components/ServiseCards/ServiceCards';
import './App.css';
import Home from './Components/Home/Home';
import SignUp from './Components/Signup/Signup'; 
import Login from './Components/Login/Login';
import TaskerForm from './Components/TaskerForm/TaskerForm';
import ProfilePage from './Components/Profilepage/Profilepage';
import Seller from './Components/Seller/seller';
import BookingForm from './Components/Book/Book';
import AboutUs from './Components/AboutUs/AboutUs';
import TaskerDetails from './Components/TaskerDetails';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />  {/* The Navbar will remain common across all pages */}

        {/* Set up routing */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home or landing page */}
          <Route path="/services" element={<ServiceCards />} />  {/* Services page */}
          <Route path="/about" element={<AboutUs />} />  {/* About page */}
          <Route path="/signup" element={<SignUp />} />  {/* Signup page */}
          <Route path="/login" element={<Login />} />  {/* Login page */}
          <Route path="/become-tasker" element={<TaskerForm />} />  {/* TaskerForm page */}
          <Route path="/profilepage" element={<ProfilePage />} />  {/* Profile page */}
          <Route path="/seller" element={<Seller />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/tasker-details" element={<TaskerDetails />} />
          {/* Add more routes as needed */}
        </Routes>

        {/* Footer will be placed at the bottom */}
      </div>
    </Router>
  );
};

export default App;