import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@gmail.com",
      role: "User",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Admin",
      email: "admin@gmail.com",
      role: "Admin",
      status: "Active",
    },
  ]);

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Blocked" : "Active",
            }
          : user
      )
    );
  };

  return (
    <AdminLayout>
      <div className="users-admin-page">
        {/* Header */}
        <div className="users-header">
          <h2>Manage Users</h2>
          <span className="user-count">Total Users: {users.length}</span>
        </div>

        {/* Table */}
        <div className="users-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="user-name">{user.name}</td>
                  <td>{user.email}</td>

                  <td>
                    <span
                      className={`role-badge ${user.role.toLowerCase()}`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`status-badge ${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>
                    {user.role !== "Admin" && (
                      <button
                        className={`user-action-btn ${
                          user.status === "Active" ? "block" : "activate"
                        }`}
                        onClick={() => toggleStatus(user.id)}
                      >
                        {user.status === "Active" ? "Block" : "Activate"}
                      </button>
                    )}
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="no-data">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageUsers;
