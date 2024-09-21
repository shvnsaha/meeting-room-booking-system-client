import { ReactNode } from "react";

import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { useCurrentUser } from "../redux/features/auth/authSlice";

type TProtectedRoute = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentUser);

  if (!token) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;