import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  FaHome,
  FaNewspaper,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/logo.png";
import auth from "../../../Firebase/Firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const menu = (
    <>
      <li>
        <Link to="/">
          <FaHome />
          Home
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <MdDashboard />
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/blogs">
          <FaNewspaper />
          Blogs
        </Link>
      </li>
      <li>
        <Link to="/portfolio">
          <FaUserCircle />
          Portfolio
        </Link>
      </li>
      <li>
        {user ? (
          <Link
            to="/signin"
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("accessToken");
            }}
          >
            <FaSignOutAlt />
            SignOut
          </Link>
        ) : (
          <Link to="/signin">
            <FiLogIn />
            SignIn
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar lg:px-10 bg-white shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-8" src={Logo} alt="logo" />
          Proper Parts
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          htmlFor="dashboard-sidebar"
          tabIndex="1"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
