// src/pages/TenantsPage.js
import React, { useState } from 'react';
import TenantCard from '../components/TenantCard';
import TenantForm from '../components/TenantForm';

const TenantsPage = () => {
  const [tenants, setTenants] = useState([
    {
      id: 1,
      name: 'John Doe',
      roomNumber: '101',
      checkIn: '2024-09-01',
      checkOut: '2024-12-01',
      paymentStatus: 'Paid',
    },
    {
      id: 2,
      name: 'Jane Smith',
      roomNumber: '102',
      checkIn: '2024-08-15',
      checkOut: '2024-11-15',
      paymentStatus: 'Pending',
    },
  ]);
  const [editingTenant, setEditingTenant] = useState(null);

  const handleAddTenant = (tenantData) => {
    setTenants([...tenants, { ...tenantData, id: tenants.length + 1 }]);
  };

  const handleEditTenant = (updatedTenant) => {
    setTenants(
      tenants.map((tenant) =>
        tenant.id === updatedTenant.id ? updatedTenant : tenant
      )
    );
    setEditingTenant(null); // Reset edit mode after save
  };

  const handleDeleteTenant = (id) => {
    setTenants(tenants.filter((tenant) => tenant.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Tenants</h1>
      <TenantForm onSubmit={editingTenant ? handleEditTenant : handleAddTenant} tenant={editingTenant} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {tenants.map((tenant) => (
          <TenantCard
            key={tenant.id}
            tenant={tenant}
            onEdit={() => setEditingTenant(tenant)}
            onDelete={() => handleDeleteTenant(tenant.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TenantsPage;
