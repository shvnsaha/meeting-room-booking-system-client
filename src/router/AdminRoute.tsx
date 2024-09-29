import { ReactNode } from "react";

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useCurrentUser } from "../redux/features/auth/authSlice";

type TProtectedRoute = {
  children: ReactNode;
};

const AdminRoute = ({ children }: TProtectedRoute) => {
  const user = useAppSelector(useCurrentUser);

  if (user?.role !== 'admin') {
    return <Navigate  to="/"></Navigate>;
  }

  return <div>{children}</div>;
};

export default AdminRoute;