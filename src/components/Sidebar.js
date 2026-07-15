import {
  FaHome,
  FaBuilding,
  FaUsers,
  FaFileContract,
  FaMoneyBillWave,
  FaLink,
  FaHistory,
  FaChartBar,
  FaUserCircle,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {

  const location = useLocation();

  const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.href = "/";

  };

  const menu = [

    {
      icon: <FaHome />,
      text: "Dashboard",
      path: "/dashboard"
    },

    {
      icon: <FaBuilding />,
      text: "Properties",
      path: "/properties"
    },

    {
      icon: <FaUsers />,
      text: "Tenants",
      path: "/tenants"
    },

    {
      icon: <FaFileContract />,
      text: "Agreements",
      path: "/agreements"
    },

    {
      icon: <FaMoneyBillWave />,
      text: "Payments",
      path: "/payments"
    },

    {
      icon: <FaLink />,
      text: "Blockchain",
      path: "/blockchain"
    },

    {
      icon: <FaHistory />,
      text: "Audit Logs",
      path: "/audit"
    },

    {
      icon: <FaChartBar />,
      text: "Reports",
      path: "/reports"
    },

    {
      icon: <FaUserCircle />,
      text: "Profile",
      path: "/profile"
    },

    {
      icon: <FaCog />,
      text: "Settings",
      path: "/settings"
    }

  ];

  return (

    <aside className="sidebar">

      <div>

        <div className="sidebar-logo">

          <div className="logo-circle">

            🏠

          </div>

          <div>

            <h2>

              RentalMS

            </h2>

            <span>

              Admin Panel

            </span>

          </div>

        </div>

        <ul className="sidebar-menu">

          {

            menu.map((item) => (

              <li
                key={item.path}
                className={
                  location.pathname === item.path
                    ? "active"
                    : ""
                }
              >

                <Link to={item.path}>

                  {item.icon}

                  <span>

                    {item.text}

                  </span>

                </Link>

              </li>

            ))

          }

        </ul>

      </div>

      <div className="sidebar-footer">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>

  );

}

export default Sidebar;