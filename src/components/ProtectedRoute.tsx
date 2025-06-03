import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export default function ProtectedRoute({ children }: { children: React.ReactElement }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}
