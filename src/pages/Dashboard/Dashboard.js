import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer overflow-auto drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-[90%] mx-auto my-10">
        <h2 className="text-2xl text-center text-primary mb-4">
          Welcome To DashBoard
          <hr />
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {!admin && (
            <>
              <li>
                <Link to="/dashboard">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/review">Add A Review</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="/">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/admin">Make Admin</Link>
              </li>
              <li>
                <Link to="/">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
