// src/pages/RoomsPage.js
import React, { useState, useEffect } from 'react';
import RoomCard from '../components/RoomCard';

const RoomsPage = () => {
  const [rooms, setRooms] = useState([]);

  // Simulating a fetch call (later this will come from the API/backend)
  useEffect(() => {
    const fetchRooms = () => {
      const roomData = [
        { number: '101', capacity: 2, price: 5000, isAvailable: true },
        { number: '102', capacity: 4, price: 8000, isAvailable: false },
        { number: '103', capacity: 1, price: 3000, isAvailable: true },
        { number: '104', capacity: 2, price: 5000, isAvailable: false },
        { number: '105', capacity: 2, price: 10000, isAvailable: true },
        { number: '106', capacity: 2, price: 25000, isAvailable: false },
        { number: '107', capacity: 2, price: 5000, isAvailable: true },
        { number: '108', capacity: 2, price: 15000, isAvailable: false },
        { number: '109', capacity: 2, price: 5000, isAvailable: true },
      ];
      setRooms(roomData);
    };
    fetchRooms();
  }, []);

  return (
    <div className='bg-gray-300 h-full text-center'>
      <h1 className="text-2xl font-bold mb-4">Manage Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <RoomCard key={room.number} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
