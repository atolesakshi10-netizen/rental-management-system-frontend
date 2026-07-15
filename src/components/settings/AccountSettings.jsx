import { useNavigate } from "react-router-dom";
import "../../styles/Settings.css";

function AccountSettings() {

  const navigate = useNavigate();

  const handleLogout = () => {

    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <div className="settings-card">

      <h3>👤 Account</h3>

      <div className="setting-row">

        <span>Role</span>

        <strong>Administrator</strong>

      </div>

      <div className="setting-row">

        <span>Application Version</span>

        <strong>v1.0.0</strong>

      </div>

      <div className="setting-row">

        <span>Backend</span>

        <strong>FastAPI + PostgreSQL</strong>

      </div>

      <div className="setting-row">

        <span>Frontend</span>

        <strong>React.js</strong>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >

        Logout

      </button>

    </div>

  );

}

export default AccountSettings;