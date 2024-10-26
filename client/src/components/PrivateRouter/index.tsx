import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../auth/Auth.ts";

interface PrivateRouteProps {
  redirectTo?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  redirectTo = "/login",
}) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to={redirectTo} replace />;
};
