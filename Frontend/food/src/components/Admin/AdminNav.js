// File: src/components/Admin/AdminNav.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogout } from '../../utils/auth';

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    adminLogout();
    navigate('/admin/login');
  };

  return (
    <div className="admin-navbar">
      <div className="admin-nav-content">
        <h1>Admin Panel</h1>
        <div className="admin-nav-actions">
          <span className="admin-email">
            {localStorage.getItem('adminEmail')}
          </span>
          <button onClick={handleLogout} className="logout-btn">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;