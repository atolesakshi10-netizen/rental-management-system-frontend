import {
  FaSearch,
  FaBell,
  FaMoon,
  FaCog,
  FaUserCircle
} from "react-icons/fa";

import "./LandingNavbar.css";

function Navbar() {

  return (

    <div className="top-navbar">

      <div className="top-left">

        <h2>

          Welcome Back 👋

        </h2>

        <p>

          Here's what's happening with your rental business today.

        </p>

      </div>

      <div className="top-right">

        <div className="search-container">

          <FaSearch />

          <input
            type="text"
            placeholder="Search properties, tenants..."
          />

        </div>

        <div className="nav-icon">

          <FaMoon />

        </div>

        <div className="nav-icon notification-icon">

          <FaBell />

          <span>

            5

          </span>

        </div>

        <div className="nav-icon">

          <FaCog />

        </div>

        <div className="profile-card">

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