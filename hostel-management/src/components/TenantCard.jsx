// src/components/TenantCard.js
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const TenantCard = ({ tenant, onEdit, onDelete }) => {
  // Initialize AOS for animations
  React.useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg shadow-md p-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full ${
            tenant.paymentStatus === 'Paid' ? 'bg-green-100' : 'bg-red-100'
          }`}
        >
          <span
            className={`text-2xl font-bold ${
              tenant.paymentStatus === 'Paid' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {tenant.name.charAt(0)}
          </span>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{tenant.name}</h2>
          <p className="text-gray-700">Room: {tenant.roomNumber}</p>
          <p className="text-gray-700">Check-in: {tenant.checkIn}</p>
          <p className="text-gray-700">Check-out: {tenant.checkOut}</p>
          <p className={`font-medium ${tenant.paymentStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
            Payment: {tenant.paymentStatus}
          </p>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={onEdit}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TenantCard;
