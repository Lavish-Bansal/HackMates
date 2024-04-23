// RegistrationForm.js

import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    college: '',
    location: '',
    skills: '',
    phone: '',
    profileImage: null,
    hackathons: [''] // Initialize with one empty string for hackathon name
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };

  const handleHackathonChange = (index, value) => {
    const updatedHackathons = [...formData.hackathons];
    updatedHackathons[index] = value;
    setFormData({ ...formData, hackathons: updatedHackathons });
  };

  const handleAddHackathon = () => {
    const updatedHackathons = [...formData.hackathons, ''];
    setFormData({ ...formData, hackathons: updatedHackathons });
  };

  const handleRemoveHackathon = (index) => {
    const updatedHackathons = [...formData.hackathons];
    updatedHackathons.splice(index, 1);
    setFormData({ ...formData, hackathons: updatedHackathons });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend API)

    try {
      const response = await fetch('your-backend-api-url', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        // Registration successful
        console.log('User registered successfully!');
        // Optionally, redirect to another page or display a success message
      } else {
        // Registration failed
        console.error('Failed to register user.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="education" placeholder="Education" value={formData.education} onChange={handleChange} required />
      <input type="text" name="college" placeholder="College" value={formData.college} onChange={handleChange} />
      <input type="text" name="location" placeholder="Current Location" value={formData.location} onChange={handleChange} required/>
      <input type="text" name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} required/>
      <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required/>
      <input type="file" name="profileImage" accept="image/*" onChange={handleImageChange} />

      {/* Hackathon names input */}
      <h4>Hackathon Names:</h4>
      {formData.hackathons.map((hackathon, index) => (
        <div key={index}>
          <input
            type="text"
            value={hackathon}
            onChange={(e) => handleHackathonChange(index, e.target.value)}
            placeholder={`Hackathon ${index + 1}`}
          />
          <button type="button" onClick={() => handleRemoveHackathon(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={handleAddHackathon}>Add Hackathon</button>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
