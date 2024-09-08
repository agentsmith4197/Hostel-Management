import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

    
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className=" lg:ml-10 mt-16">
          <Outlet />
        </main>
      </div>
  );
};

export default Layout;
