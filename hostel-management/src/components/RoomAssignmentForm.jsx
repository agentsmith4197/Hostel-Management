// src/components/RoomAssignmentForm.js
import React, { useState } from 'react';

const RoomAssignmentForm = ({ rooms, tenants, onAssign }) => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedTenant, setSelectedTenant] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAssign(selectedTenant, selectedRoom);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <select
        name="tenant"
        value={selectedTenant}
        onChange={(e) => setSelectedTenant(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">Select Tenant</option>
        {tenants.map((tenant) => (
          <option key={tenant.id} value={tenant.id}>{tenant.name}</option>
        ))}
      </select>

      <select
        name="room"
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">Select Room</option>
        {rooms.map((room) => (
          <option key={room.number} value={room.number}>{room.number}</option>
        ))}
      </select>

      <button type="submit" className="bg-green-500 text-white p-2 rounded">Assign Room</button>
    </form>
  );
};

export default RoomAssignmentForm;
