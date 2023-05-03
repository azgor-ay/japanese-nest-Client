import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <div
          className=" bg-black radial-progress text-primary"
          style={{ "--value": 70 }}
        >
          Loading
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default PrivateRoute;
