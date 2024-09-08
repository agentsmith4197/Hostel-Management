// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RoomsPage from './pages/RoomsPage';
import BookingPage from './pages/BookingPage';
import TenantsPage from './pages/TenantsPage';
import SettingsPage from './pages/SettingsPage';
import Layout from './layout';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PaymentForm from './components/PaymentForm';

function App() {
  return (
    <Router>
            <Routes>
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route element={<Layout />}>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/booking" element={<BookingPage/>} />
              <Route path="/tenants" element={<TenantsPage/>} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/payments" element={<PaymentForm />} />
              </Route>
            </Routes>
    </Router>
  );
}

export default App;
