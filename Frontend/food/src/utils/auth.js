// File: src/utils/auth.js
export const isAuthenticated = () => {
  return localStorage.getItem('authToken') !== null;
};

export const isAdmin = () => {
  return localStorage.getItem('adminToken') !== null;
};

export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userId');
};

export const adminLogout = () => {
  localStorage.removeItem('adminToken');
  localStorage.removeItem('adminEmail');
  localStorage.removeItem('adminId');
};
