import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-[90%] mx-auto my-4">
        <h2 className="text-2xl text-center text-primary">
          Welcome To DashBoard
        </h2>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/">My Orders</Link>
          </li>
          <li>
            <Link to="/">Add A Review</Link>
          </li>
          <li>
            <Link to="/">My Profile</Link>
          </li>
          <li>
            <Link to="/">Manage All Orders</Link>
          </li>
          <li>
            <Link to="/">Add A Product</Link>
          </li>
          <li>
            <Link to="/">Make Admin</Link>
          </li>
          <li>
            <Link to="/">Manage Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
