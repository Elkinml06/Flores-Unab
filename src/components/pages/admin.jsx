import { Routes, Route } from "react-router-dom";
import Login from "./admin/login.jsx";
import Dashboard from "./admin/dashboard.jsx";
import ProtectedAdminRoute from "./admin/ProtectedAdminRoute.jsx";

const AdminApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="dashboard"
        element={
          <ProtectedAdminRoute>
            <Dashboard />
          </ProtectedAdminRoute>
        }
      />
    </Routes>
  );
};

export default AdminApp;
