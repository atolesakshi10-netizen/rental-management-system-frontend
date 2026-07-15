import {
  FaBell,
  FaCog,
  FaUserCircle
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./LandingNavbar.css";

function Navbar() {

  const navigate = useNavigate();


  return (

    <div className="top-navbar">

      <div className="top-left">

        <h2>Welcome Back 👋</h2>

        <p>
          Here's what's happening with your rental business today.
        </p>

      </div>

      <div className="top-right">


        
        <div
          className="nav-icon notification-icon"
          onClick={() => alert("No new notifications")}
          style={{ cursor: "pointer" }}
        >

          <FaBell />

          <span>

            5

          </span>

        </div>

        <div
          className="nav-icon"
          onClick={() => navigate("/settings")}
          style={{ cursor: "pointer" }}
        >

          <FaCog />

        </div>

        <div
          className="profile-card"
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        >

          <FaUserCircle className="avatar"/>

          <div>

            <h4>

              Admin

            </h4>

            <span>

              Administrator

            </span>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Navbar;