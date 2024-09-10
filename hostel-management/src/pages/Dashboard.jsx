import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

AOS.init({
  duration: 1000, // Duration of animations in milliseconds
});

const Dashboard = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-300">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-dark-gray" data-aos="fade-up">
        Hostel Management Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          className="bg-blue-600 text-white p-6 rounded-lg shadow-lg"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-semibold mb-4">Total Students</h2>
          <p className="text-4xl">120</p>
        </div>
        <div
          className="bg-green-600 text-white p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-semibold mb-4">Available Rooms</h2>
          <p className="text-4xl">25</p>
        </div>
        <div
          className="bg-yellow-600 text-white p-6 rounded-lg shadow-lg"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-semibold mb-4">Ongoing Bookings</h2>
          <p className="text-4xl">15</p>
        </div>
        <div
          className="bg-red-600 text-white p-6 rounded-lg shadow-lg"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-semibold mb-4">Total Payments</h2>
          <p className="text-4xl">$8,450</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/tenants"
          className="bg-green-500 text-white p-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
          data-aos="zoom-in"
        >
          Add New Student
        </Link>
        <Link
          to="/booking"
          className="bg-green-500 text-white p-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
          data-aos="zoom-in"
        >
          Add New Room
        </Link>
        <button
          className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
          data-aos="zoom-in"
        >
          View Reports
        </button>
        <Link
          to="/payments"
          className="bg-red-500 text-white p-6 rounded-lg shadow-lg hover:bg-red-600 transition duration-300 flex items-center justify-center"
          data-aos="zoom-in"
        >
          Manage Payments
        </Link>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-6 text-dark-gray">Recent Activities</h2>
        <ul className="space-y-4">
          <li className="border-b pb-4">
            <span className="font-bold text-dark-gray">John Doe</span> booked Room 204 on{' '}
            <span className="text-gray-600">Aug 5, 2024</span>.
          </li>
          <li className="border-b pb-4">
            <span className="font-bold text-dark-gray">Sarah Smith</span> made a payment of{' '}
            <span className="text-gray-600">$400</span> on{' '}
            <span className="text-gray-600">Aug 4, 2024</span>.
          </li>
          <li className="border-b pb-4">
            <span className="font-bold text-dark-gray">David Brown</span> checked out of Room
            302 on <span className="text-gray-600">Aug 3, 2024</span>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
