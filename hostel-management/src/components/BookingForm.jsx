// src/components/BookingForm.js
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    roomNumber: '',
    checkIn: '',
    checkOut: '',
  });

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send data back to BookingPage
    setFormData({ name: '', roomNumber: '', checkIn: '', checkOut: '' }); // Clear form after submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-6 space-y-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Book a Room</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Students Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Students name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Room Number</label>
        <input
          type="text"
          name="roomNumber"
          placeholder="Enter room number"
          value={formData.roomNumber}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Check-In Date</label>
        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Check-Out Date</label>
        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-300"
      >
        Book Room
      </button>
    </form>
  );
};

export default BookingForm;
