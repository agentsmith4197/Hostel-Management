import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaUserCircle, FaHome, FaBed, FaClipboardList, FaUsers, FaCog } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md fixed top-0 left-0 right-0 z-20">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Hostel Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-bold">Hostel Management System</h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link to="/" className="flex items-center text-lg hover:text-gray-300">
            <FaHome className="mr-2 text-xl" /> Dashboard
          </Link>
          <Link to="/rooms" className="flex items-center text-lg hover:text-gray-300">
            <FaBed className="mr-2 text-xl" /> Rooms
          </Link>
          <Link to="/booking" className="flex items-center text-lg hover:text-gray-300">
            <FaClipboardList className="mr-2 text-xl" /> Booking
          </Link>
          <Link to="/tenants" className="flex items-center text-lg hover:text-gray-300">
            <FaUsers className="mr-2 text-xl" /> Tenants
          </Link>
          <Link to="/settings" className="flex items-center text-lg hover:text-gray-300">
            <FaCog className="mr-2 text-xl" /> Settings
          </Link>
        </nav>

        {/* Utility icons (Profile, Notifications) */}
        <div className="flex items-center space-x-6">
          {/* Notifications */}
          <button className="relative lg:hidden">
            <FaBell className="text-2xl hover:text-gray-300" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1">
              3
            </span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <FaUserCircle className="text-3xl hover:text-gray-300" />
            <span className="text-lg hidden lg:inline">Admin</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 bg-blue-600 text-white shadow-md">
        <ul className="flex justify-around p-2">
          <li>
            <Link to="/" className="flex flex-col items-center text-lg hover:text-gray-300">
              <FaHome className="text-xl" />
              <span className="text-sm">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/rooms" className="flex flex-col items-center text-lg hover:text-gray-300">
              <FaBed className="text-xl" />
              <span className="text-sm">Rooms</span>
            </Link>
          </li>
          <li>
            <Link to="/booking" className="flex flex-col items-center text-lg hover:text-gray-300">
              <FaClipboardList className="text-xl" />
              <span className="text-sm">Booking</span>
            </Link>
          </li>
          <li>
            <Link to="/tenants" className="flex flex-col items-center text-lg hover:text-gray-300">
              <FaUsers className="text-xl" />
              <span className="text-sm">Tenants</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex flex-col items-center text-lg hover:text-gray-300">
              <FaCog className="text-xl" />
              <span className="text-sm">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
