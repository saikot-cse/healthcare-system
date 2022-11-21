import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { useDoctor } from "../../Hooks/useDoctor";
import { Loading } from "../Shared/Loading";

export const RequireDoctor = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [doctor, doctorLoading] = useDoctor(user);
  const location = useLocation();

  if (loading || doctorLoading) {
    return <Loading></Loading>;
  }

  if (!user || !doctor) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};
