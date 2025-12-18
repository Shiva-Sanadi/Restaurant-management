import React from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="admin-dashboard">
        {/* Header */}
        <div className="dashboard-header">
          <h2>Dashboard Overview</h2>
          <p>Welcome back, Admin 👋</p>
        </div>

        {/* KPI Cards */}
        <div className="admin-cards">
          <div className="admin-card">
            <span className="material-symbols-outlined">shopping_cart</span>
            <div>
              <h3>Total Orders</h3>
              <p>120</p>
            </div>
          </div>

          <div className="admin-card">
            <span className="material-symbols-outlined">people</span>
            <div>
              <h3>Total Users</h3>
              <p>86</p>
            </div>
          </div>

          <div className="admin-card">
            <span className="material-symbols-outlined">event</span>
            <div>
              <h3>Reservations</h3>
              <p>34</p>
            </div>
          </div>

          <div className="admin-card highlight">
            <span className="material-symbols-outlined">currency_rupee</span>
            <div>
              <h3>Revenue</h3>
              <p>₹45,200</p>
            </div>
          </div>
        </div>

        {/* Tables Section */}
        <div className="dashboard-tables">
          {/* Recent Orders */}
          <div className="dashboard-table">
            <h3>Recent Orders</h3>
            <table>
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
                  <td>#ORD123</td>
                  <td>Rahul</td>
                  <td>₹520</td>
                  <td className="status success">Completed</td>
                </tr>
                <tr>
                  <td>#ORD124</td>
                  <td>Anjali</td>
                  <td>₹340</td>
                  <td className="status pending">Pending</td>
                </tr>
                <tr>
                  <td>#ORD125</td>
                  <td>Vikram</td>
                  <td>₹780</td>
                  <td className="status cancel">Cancelled</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Recent Reservations */}
          <div className="dashboard-table">
            <h3>Recent Reservations</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Guests</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Priya</td>
                  <td>12 Sep</td>
                  <td>7:30 PM</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Arjun</td>
                  <td>13 Sep</td>
                  <td>8:00 PM</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Neha</td>
                  <td>14 Sep</td>
                  <td>6:30 PM</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
