import { useEffect, useState } from "react";
import "../../styles/Settings.css";

function NotificationSettings() {

  const [emailNotifications, setEmailNotifications] = useState(
    localStorage.getItem("emailNotifications") !== "false"
  );

  const [systemNotifications, setSystemNotifications] = useState(
    localStorage.getItem("systemNotifications") !== "false"
  );

  useEffect(() => {

    localStorage.setItem(
      "emailNotifications",
      emailNotifications
    );

    localStorage.setItem(
      "systemNotifications",
      systemNotifications
    );

  }, [emailNotifications, systemNotifications]);

  return (

    <div className="settings-card">

      <h3>🔔 Notifications</h3>

      <div className="setting-row">

        <span>Email Notifications</span>

        <label className="switch">

          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() =>
              setEmailNotifications(!emailNotifications)
            }
          />

          <span className="slider"></span>

        </label>

      </div>

      <div className="setting-row">

        <span>System Notifications</span>

        <label className="switch">

          <input
            type="checkbox"
            checked={systemNotifications}
            onChange={() =>
              setSystemNotifications(!systemNotifications)
            }
          />

          <span className="slider"></span>

        </label>

      </div>

    </div>

  );

}

export default NotificationSettings;