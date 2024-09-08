// src/components/PaymentHistory.js
import React from 'react';

const PaymentHistory = ({ tenant }) => {
  const payments = [
    { id: 1, amount: 500, date: '2024-09-01', status: 'Paid' },
    { id: 2, amount: 300, date: '2024-08-15', status: 'Pending' },
    // Payment history for the tenant (you'll likely fetch this from a database)
  ];

  return (
    <div className="mt-4">
      <h3 className="font-bold text-lg mb-2">Payment History for {tenant.name}</h3>
      <div className="border p-4 rounded-lg shadow">
        {payments.length === 0 ? (
          <p>No payment history available</p>
        ) : (
          payments.map((payment) => (
            <div key={payment.id} className="mb-4">
              <p>Amount: ${payment.amount}</p>
              <p>Date: {payment.date}</p>
              <p
                className={
                  payment.status === 'Paid' ? 'text-green-500' : 'text-red-500'
                }
              >
                Status: {payment.status}
              </p>
              <hr className="my-2" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
