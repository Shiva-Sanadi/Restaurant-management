import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP LOGIN (replace with API)
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("adminToken", "admin-auth-token");
      localStorage.setItem("adminEmail", email);
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="login-header">
          <span className="material-symbols-outlined">admin_panel_settings</span>
          <h2>Admin Panel</h2>
          <p>Sign in to manage your restaurant</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="material-symbols-outlined">mail</span>
            <input
              type="email"
              placeholder="Admin Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <span className="material-symbols-outlined">lock</span>
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-footer">
          <p>© 2025 Foodies Admin</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
