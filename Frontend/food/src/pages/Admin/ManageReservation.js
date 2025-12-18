import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

const ManageReservation = () => {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      date: "2025-01-20",
      time: "7:30 PM",
      partySize: 4,
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Sarah Lee",
      date: "2025-01-21",
      time: "8:00 PM",
      partySize: 2,
      status: "Pending",
    },
    {
      id: 3,
      name: "Michael Brown",
      date: "2025-01-22",
      time: "6:45 PM",
      partySize: 6,
      status: "Cancelled",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setReservations(
      reservations.map((res) =>
        res.id === id ? { ...res, status: newStatus } : res
      )
    );
  };

  return (
    <AdminLayout>
      <div className="reservation-admin-page">
        {/* Header */}
        <div className="reservation-header">
          <h2>Manage Reservations</h2>
          <span className="reservation-count">
            Total Reservations: {reservations.length}
          </span>
        </div>

        {/* Table */}
        <div className="reservation-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Party Size</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {reservations.map((res) => (
                <tr key={res.id}>
                  <td className="guest-name">{res.name}</td>
                  <td>{res.date}</td>
                  <td>{res.time}</td>
                  <td>{res.partySize}</td>

                  <td>
                    <span
                      className={`status-badge ${res.status.toLowerCase()}`}
                    >
                      {res.status}
                    </span>
                  </td>

                  <td>
                    <select
                      className="status-select"
                      value={res.status}
                      onChange={(e) =>
                        handleStatusChange(res.id, e.target.value)
                      }
                    >
                      <option>Pending</option>
                      <option>Confirmed</option>
                      <option>Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}

              {reservations.length === 0 && (
                <tr>
                  <td colSpan="6" className="no-data">
                    No reservations found
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

export default ManageReservation;
