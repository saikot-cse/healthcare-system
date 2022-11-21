import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import { useAdmin } from "../../Hooks/useAdmin";
import { useDoctor } from "../../Hooks/useDoctor";

export const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [doctor] = useDoctor(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {(
            <li>
              <Link to="/dashboard/appoinment">My Appoinment</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/review">My Review</Link>
          </li>

          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/add">Add Doctor</Link>
              </li>
              <li>
                <Link to="/dashboard/doctors">Manage Doctors</Link>
              </li>
              <li>
                <Link to="/dashboard/addDisease">Add Disease</Link>
              </li>
              <li>
                <Link to="/dashboard/manageDisease">Manage Disease</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
