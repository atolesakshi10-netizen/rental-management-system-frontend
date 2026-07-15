import {
  FaUserShield,
  FaClipboardList,
  FaClock
} from "react-icons/fa";

import "../../styles/Audit.css";

function AuditTable({ logs }) {

  if (logs.length === 0) {

    return (

      <div className="table-container">

        <div
          style={{
            textAlign: "center",
            padding: "70px",
            color: "#64748b",
            fontSize: "18px"
          }}
        >

          📜 No Audit Logs Found

        </div>

      </div>

    );

  }

  return (

    <div className="table-container">

      <table className="property-table">

        <thead>

          <tr>

            <th>User</th>

            <th>Action</th>

            <th>Timestamp</th>

          </tr>

        </thead>

        <tbody>

          {

            logs.map((log) => (

              <tr key={log.id}>

                <td>

                  <div className="property-info">

                    <div
                      className="property-avatar"
                      style={{
                        background: "#EEF4FF",
                        color: "#2563EB"
                      }}
                    >

                      <FaUserShield />

                    </div>

                    <div>

                      <h4>

                        {log.user_email}

                      </h4>

                      <span>

                        User #{log.id}

                      </span>

                    </div>

                  </div>

                </td>

                <td>

                  <div className="address">

                    <FaClipboardList />

                    {log.action}

                  </div>

                </td>

                <td>

                  <div className="address">

                    <FaClock />

                    {new Date(log.timestamp).toLocaleString()}

                  </div>

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}

export default AuditTable;