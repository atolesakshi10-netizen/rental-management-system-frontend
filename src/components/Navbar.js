import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaUserCircle,
  FaCalendarAlt
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {

  return (

    <>
      <div className="navbar">

        <div className="welcome">

          <h1>Good Evening, Admin! 👋</h1>

          <p>Here's what's happening with your rental business today.</p>

        </div>

        <div className="navbar-right">

          <div className="search-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search anything..."
            />

          </div>

          <div className="notification">

            <FaBell />

            <span>5</span>

          </div>

          <div className="notification">

            <FaEnvelope />

            <span>3</span>

          </div>

          <div className="profile-section">

            <FaUserCircle className="profile-icon" />

            <div className="profile-info">

              <h4>Admin User</h4>

              <p>Administrator</p>

            </div>

          </div>

        </div>

      </div>


      <div className="date-card">

        Jun 12, 2026 - Jun 18, 2026

        <FaCalendarAlt />

      </div>

    </>
  );

}

export default Navbar;