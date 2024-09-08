// src/components/RoomCard.js
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const RoomCard = ({ room }) => {
  // Initialize AOS for animations
  React.useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden p-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full ${
            room.isAvailable ? 'bg-green-200' : 'bg-red-200'
          }`}
        >
          <span
            className={`text-2xl font-bold ${
              room.isAvailable ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {room.number}
          </span>
        </div>
        <div className="ml-4">
          <h2 className="text-2xl font-semibold">{room.number}</h2>
          <p className="text-gray-600">Capacity: {room.capacity}</p>
          <p className="text-gray-600">Price: ${room.price}</p>
          <p
            className={`font-medium ${
              room.isAvailable ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {room.isAvailable ? 'Available' : 'Occupied'}
          </p>
        </div>
      </div>
      <button
        className={`w-full py-2 rounded-lg font-semibold text-white ${
          room.isAvailable ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 cursor-not-allowed'
        }`}
        disabled={!room.isAvailable}
      >
        {room.isAvailable ? 'Book Now' : 'Not Available'}
      </button>
    </div>
  );
};

export default RoomCard;
