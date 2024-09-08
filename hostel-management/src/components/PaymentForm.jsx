// src/components/PaymentForm.js
import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const PaymentForm = ({ tenant, onSubmit }) => {
  const [paymentData, setPaymentData] = useState({
    amount: '',
    date: '',
    status: 'Paid', // Default to "Paid"
  });

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tenant.id, paymentData); // Send payment data to parent component
    setPaymentData({ amount: '', date: '', status: 'Paid' });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Amount</label>
        <input
          type="number"
          name="amount"
          value={paymentData.amount}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter amount"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Payment Date</label>
        <input
          type="date"
          name="date"
          value={paymentData.date}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Payment Status</label>
        <select
          name="status"
          value={paymentData.status}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white p-3 rounded-lg w-full hover:bg-green-600 transition duration-300"
      >
        Submit Payment
      </button>
    </form>
  );
};

export default PaymentForm;
