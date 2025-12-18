import React from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

const Analytics = () => {
  return (
    <AdminLayout>
      <div className="analytics-page">
        {/* Header */}
        <div className="analytics-header">
          <h2>Analytics Overview</h2>
          <p>Monitor performance, sales & customer engagement</p>
        </div>

        {/* Stats Cards */}
        <div className="analytics-stats">
          <div className="stat-card">
            <span className="material-symbols-outlined">shopping_cart</span>
            <h4>Total Orders</h4>
            <p>1,240</p>
          </div>

          <div className="stat-card">
            <span className="material-symbols-outlined">currency_rupee</span>
            <h4>Total Revenue</h4>
            <p>₹4,52,300</p>
          </div>

          <div className="stat-card">
            <span className="material-symbols-outlined">people</span>
            <h4>Active Users</h4>
            <p>860</p>
          </div>

          <div className="stat-card">
            <span className="material-symbols-outlined">event</span>
            <h4>Reservations</h4>
            <p>134</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="analytics-charts">
          <div className="chart-box">
            <h3>Monthly Revenue</h3>
            <div className="chart-placeholder">
              📈 Chart Placeholder
            </div>
          </div>

          <div className="chart-box">
            <h3>Orders by Category</h3>
            <div className="chart-placeholder">
              🍽️ Chart Placeholder
            </div>
          </div>
        </div>

        {/* Recent Insights */}
        <div className="analytics-insights">
          <h3>Key Insights</h3>
          <ul>
            <li>📌 Lunch orders increased by <strong>18%</strong> this month</li>
            <li>📌 Weekend reservations are highest between <strong>7–9 PM</strong></li>
            <li>📌 Average order value: <strong>₹365</strong></li>
            <li>📌 Returning customers: <strong>62%</strong></li>
          </ul>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Analytics;
