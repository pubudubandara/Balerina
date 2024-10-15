import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const TaskerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: '',
    category: ''
  });

  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/taskers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('You are a Tasker now!');
        navigate('/tasker-details', { state: { formData } });  // Redirect and pass form data
      } else {
        alert('Error submitting application');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="tasker-form">
      <h1>Become a Tasker</h1>
      <p>Join our community of skilled Taskers and start earning!</p>
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <input 
          type="text" 
          name="fullName" 
          placeholder="Full Name" 
          value={formData.fullName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="phoneNumber" 
          placeholder="Phone Number" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
        />

        <h2>Address Information</h2>
        <input 
          type="text" 
          name="addressLine1" 
          placeholder="Address Line 1" 
          value={formData.addressLine1} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="addressLine2" 
          placeholder="Address Line 2" 
          value={formData.addressLine2} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="city" 
          placeholder="City" 
          value={formData.city} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="stateProvince" 
          placeholder="State/Province" 
          value={formData.stateProvince} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="postalCode" 
          placeholder="Postal Code" 
          value={formData.postalCode} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="country" 
          placeholder="Country" 
          value={formData.country} 
          onChange={handleChange} 
          required 
        />
        <select 
          name="category" 
          value={formData.category} 
          onChange={handleChange} 
          required
        >
          <option value="">Select Category</option>
          <option value="Assembly">Assembly</option>
          <option value="Mounting">Mounting</option>
          <option value="Moving">Moving</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Outdoor Help">Outdoor Help</option>
          <option value="Home Repairs">Home Repairs</option>
          <option value="Painting">Painting</option>
        </select>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default TaskerForm;
