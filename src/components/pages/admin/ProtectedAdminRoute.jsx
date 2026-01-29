import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
  const isAuth = localStorage.getItem("adminAuth");

  if (!isAuth) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;
