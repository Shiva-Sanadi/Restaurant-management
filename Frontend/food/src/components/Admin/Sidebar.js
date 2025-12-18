// File: src/components/Admin/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/admin', icon: 'dashboard', label: 'Dashboard' },
    { path: '/admin/orders', icon: 'shopping_bag', label: 'Orders' },
    { path: '/admin/menu', icon: 'restaurant_menu', label: 'Menu Items' },
    { path: '/admin/reservations', icon: 'event', label: 'Reservations' },
    { path: '/admin/users', icon: 'people', label: 'Users' },
    { path: '/admin/analytics', icon: 'analytics', label: 'Analytics' }
  ];

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>Foodies Admin</h2>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;