import React, { useState } from 'react';
import PaymentForm from '../components/PaymentForm';
import PaymentHistory from '../components/PaymentHistory';

const PaymentsPage = () => {
  const [tenants, setTenants] = useState([
    { id: 1, name: 'John Doe', roomNumber: '101', paymentStatus: 'Paid' },
    { id: 2, name: 'Jane Smith', roomNumber: '102', paymentStatus: 'Pending' },
  ]);

  const [selectedTenant, setSelectedTenant] = useState(null);

  const handleAddPayment = (tenantId, paymentData) => {
    setTenants(
      tenants.map((tenant) =>
        tenant.id === tenantId
          ? { ...tenant, paymentStatus: paymentData.status }
          : tenant
      )
    );
  };

  return (
    <div className="bg-gray-300 p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Manage Payments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tenants.map((tenant) => (
          <div key={tenant.id} className="border p-4 rounded-lg shadow">
            <h2 className="font-bold text-xl mb-2">{tenant.name}</h2>
            <p>Room: {tenant.roomNumber}</p>
            <p
              className={
                tenant.paymentStatus === 'Paid' ? 'text-green-500' : 'text-red-500'
              }
            >
              Payment Status: {tenant.paymentStatus}
            </p>
            <div className="mt-4">
              <button
                onClick={() => setSelectedTenant(tenant)}
                className="bg-blue-500 text-white p-2 rounded mr-2"
              >
                View History
              </button>
              <button
                onClick={() => setSelectedTenant(tenant)}
                className="bg-green-500 text-white p-2 rounded"
              >
                Add Payment
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTenant && (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment History on the left */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Payment History for {selectedTenant.name}
            </h2>
            <PaymentHistory tenant={selectedTenant} />
          </div>

          {/* Payment Form on the right */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Add Payment for {selectedTenant.name}
            </h2>
            <PaymentForm tenant={selectedTenant} onSubmit={handleAddPayment} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentsPage;
