import {
  FaClipboardList,
  FaUserShield,
  FaCalendarAlt,
  FaHistory
} from "react-icons/fa";

import "../../styles/Audit.css";

function AuditStats({ logs }) {

  const totalLogs = logs.length;

  const uniqueUsers = new Set(
    logs.map((log) => log.user_email)
  ).size;

  const todayLogs = logs.filter((log) => {

    const today = new Date().toISOString().split("T")[0];

    return log.timestamp?.startsWith(today);

  }).length;

  return (

    <div className="audit-stats">

      <div className="audit-card">

        <FaClipboardList className="audit-icon blue" />

        <div>

          <h2>{totalLogs}</h2>

          <p>Total Activities</p>

        </div>

      </div>

      <div className="audit-card">

        <FaUserShield className="audit-icon green" />

        <div>

          <h2>{uniqueUsers}</h2>

          <p>Active Users</p>

        </div>

      </div>

      <div className="audit-card">

        <FaCalendarAlt className="audit-icon orange" />

        <div>

          <h2>{todayLogs}</h2>

          <p>Today's Logs</p>

        </div>

      </div>

      <div className="audit-card">

        <FaHistory className="audit-icon purple" />

        <div>

          <h2>{logs.length}</h2>

          <p>History Records</p>

        </div>

      </div>

    </div>

  );

}

export default AuditStats;