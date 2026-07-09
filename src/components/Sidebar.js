import {
FaHome,
FaBuilding,
FaUsers,
FaFileContract,
FaMoneyBill,
FaLink,
FaHistory,
FaChartBar,
FaBell,
FaUserCircle,
FaCog,
FaSignOutAlt
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {

    const handleLogout = () => {

        localStorage.removeItem("token");

        window.location.href = "/";

    };

    return (

        <div className="sidebar">

            <div>

                <div className="logo">

                    <h2>RMS</h2>

                    <p>Rental Management System</p>

                </div>

                <ul>

                    <li>
                        <Link to="/dashboard">
                            <FaHome />
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link to="/properties">
                            <FaBuilding />
                            Properties
                        </Link>
                    </li>

                    <li>
                        <Link to="/tenants">
                            <FaUsers />
                            Tenants
                        </Link>
                    </li>

                    <li>
                        <Link to="/agreements">
                            <FaFileContract />
                            Agreements
                        </Link>
                    </li>

                    <li>
                        <Link to="/payments">
                            <FaMoneyBill />
                            Payments
                        </Link>
                    </li>

                    <li>
                        <Link to="/blockchain">
                            <FaLink />
                            Blockchain
                        </Link>
                    </li>

                    <li>
                        <Link to="/audit">
                            <FaHistory />
                            Audit Logs
                        </Link>
                    </li>
                    <li>
    <Link to="/reports">
        <FaChartBar />
        Reports
    </Link>
</li>
<li>
    <Link to="/profile">
        <FaUserCircle />
        Profile
    </Link>
</li>

                    <li>
                        <Link to="/settings">
                            <FaCog />
                            Settings
                        </Link>
                    </li>

                </ul>

            </div>

            <div className="logout">

                <button onClick={handleLogout}>

                    <FaSignOutAlt />

                    &nbsp; Logout

                </button>

            </div>

        </div>

    );

}

export default Sidebar;