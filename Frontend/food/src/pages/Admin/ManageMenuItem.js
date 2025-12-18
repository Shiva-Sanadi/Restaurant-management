import React, { useState } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

const ManageMenuItem = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Paneer Butter Masala", category: "Dinner", price: 240 },
    { id: 2, name: "Veg Biryani", category: "Lunch", price: 180 },
    { id: 3, name: "Masala Dosa", category: "Breakfast", price: 90 },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setMenuItems([
      ...menuItems,
      { id: Date.now(), ...formData },
    ]);
    setFormData({ name: "", category: "", price: "" });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setMenuItems(menuItems.filter(item => item.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="menu-page">
        {/* Header */}
        <div className="menu-header">
          <h2>Manage Menu Items</h2>
          <button className="admin-btn" onClick={() => setShowModal(true)}>
            + Add New Item
          </button>
        </div>

        {/* Table */}
        <div className="menu-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price (₹)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>₹{item.price}</td>
                  <td className="action-btns">
                    <button className="admin-btn edit">Edit</button>
                    <button
                      className="admin-btn delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {menuItems.length === 0 && (
                <tr>
                  <td colSpan="4" className="no-data">
                    No menu items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h3>Add Menu Item</h3>
              <form onSubmit={handleAddItem}>
                <input
                  type="text"
                  name="name"
                  placeholder="Item Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snacks">Snacks</option>
                </select>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />

                <div className="modal-actions">
                  <button type="submit" className="admin-btn">
                    Save
                  </button>
                  <button
                    type="button"
                    className="admin-btn cancel"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ManageMenuItem;
