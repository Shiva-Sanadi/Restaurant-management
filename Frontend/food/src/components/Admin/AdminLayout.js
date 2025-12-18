import React from "react";
import Sidebar from "./Sidebar";
import AdminNav from "./AdminNav";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        <AdminNav />
        <div className="admin-page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
