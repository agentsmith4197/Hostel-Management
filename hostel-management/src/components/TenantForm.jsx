// src/components/TenantForm.js
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const TenantForm = ({ onSubmit, tenant }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    roomNumber: '',
    checkIn: '',
    checkOut: '',
    paymentStatus: '',
  });

  useEffect(() => {
    if (tenant) {
      setFormData(tenant); // Populate the form when editing
    } else {
      setFormData({ name: '', roomNumber: '', checkIn: '', checkOut: '', paymentStatus: '' });
    }
  }, [tenant]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send data to parent component
    setFormData({ name: '', roomNumber: '', checkIn: '', checkOut: '', paymentStatus: '' });
  };

  // Initialize AOS for animations
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        {tenant ? 'Edit Students' : 'Add New Students'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Students Last Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Students last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Students First Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Students first Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Students Other Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Students other Name"
            value={formData.otherName}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Room Number</label>
          <input
            type="text"
            name="roomNumber"
            placeholder="Enter Room Number"
            value={formData.roomNumber}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Check-in Date</label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Check-out Date</label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700">Payment Status</label>
          <select
            name="paymentStatus"
            value={formData.paymentStatus}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Payment Status</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-3 rounded-lg w-full hover:bg-green-600 transition duration-300"
        >
          {tenant ? 'Update Student' : 'Add Student'}
        </button>
      </form>
    </div>
  );
};

export default TenantForm;
