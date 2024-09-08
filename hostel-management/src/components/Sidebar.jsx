import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBed, FaClipboardList, FaUsers, FaCog, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation(); // Hook to get the current URL location
  const currentPath = location.pathname; // Get the current path

  const navItems = [
    { name: 'Dashboard', icon: <FaHome />, path: '/' },
    { name: 'Rooms', icon: <FaBed />, path: '/rooms' },
    { name: 'Booking', icon: <FaClipboardList />, path: '/booking' },
    { name: 'Tenants', icon: <FaUsers />, path: '/tenants' },
    { name: 'Settings', icon: <FaCog />, path: '/settings' },
  ];

  return (
    <>

      {/* Bottom navigation bar for mobile screens */}
      <div className="fixed inset-x-0 bottom-0 bg-gray-900 text-white shadow-lg lg:hidden">
        <nav>
          <ul className="flex justify-around p-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center text-lg p-2 rounded-lg transition-all duration-300 ${
                    currentPath === item.path
                      ? 'bg-gray-700 text-yellow-400'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <span className="mr-1 text-xl">{item.icon}</span>
                  <span className="hidden md:inline">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
