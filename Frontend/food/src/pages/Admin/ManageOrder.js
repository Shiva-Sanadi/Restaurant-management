import React from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

const ManageOrder = () => {
  return (
    <AdminLayout>
      <h2>Manage Orders</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#101</td>
            <td>John Doe</td>
            <td>₹520</td>
            <td className="status success">Completed</td>
          </tr>
          <tr>
            <td>#102</td>
            <td>Jane Smith</td>
            <td>₹780</td>
            <td className="status pending">Pending</td>
          </tr>
        </tbody>
      </table>
    </AdminLayout>
  );
};

export default ManageOrder;
