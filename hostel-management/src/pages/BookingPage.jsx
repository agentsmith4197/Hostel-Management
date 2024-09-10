// src/pages/BookingPage.js
import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);

  const handleBookingSubmit = (formData) => {
    // Here we would send formData to the backend (for now, just store locally)
    setBookings([...bookings, formData]);
    console.log('Booking submitted:', formData);
  };

  return (
    <div className='bg-gray-300'>
      <BookingForm onSubmit={handleBookingSubmit} />
      <h2 className="text-xl mt-6">Bookings:</h2>
      <ul className="list-disc pl-6">
        {bookings.map((booking, index) => (
          <li key={index}>{`${booking.name} booked room ${booking.roomNumber} (Check-in: ${booking.checkIn}, Check-out: ${booking.checkOut})`}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingPage;
