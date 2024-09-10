// src/pages/SettingsPage.js
import React from 'react';

const SettingsPage = () => {
  return (
    <div className="p-6 bg-gray-300 min-h-screen">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Hostel Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Room Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Room Settings</h3>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700">Room Rate:</label>
              <input
                type="number"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Enter room rate"
              />
            </div>
            <div>
              <label className="block text-gray-700">Maximum Occupants per Room:</label>
              <input
                type="number"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Enter maximum occupants"
              />
            </div>
            <div>
              <label className="block text-gray-700">Room Size (sq ft):</label>
              <input
                type="number"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Enter room size"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Save Changes
            </button>
          </div>
        </div>

        {/* Payment Settings */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Payment Settings</h3>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700">Payment Due Date:</label>
              <input
                type="date"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700">Late Payment Penalty (%):</label>
              <input
                type="number"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                placeholder="Enter penalty percentage"
              />
            </div>
            <div>
              <label className="block text-gray-700">Payment Method:</label>
              <select className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Bank Transfer</option>
                <option>PayPal</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Save Changes
            </button>
          </div>
        </div>

        {/* System Preferences */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">System Preferences</h3>
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700">System Language:</label>
              <select className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Chinese</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Timezone:</label>
              <select className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
                <option>GMT</option>
                <option>EST</option>
                <option>PST</option>
                <option>CET</option>
                <option>IST</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Notification Preferences:</label>
              <div className="space-y-2 mt-1">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">Email Notifications</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">SMS Notifications</span>
                </label>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
