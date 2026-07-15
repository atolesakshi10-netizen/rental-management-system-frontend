import {
  FaEye,
  FaEdit,
  FaTrash,
  FaEnvelope,
  FaPhoneAlt,
  FaUserCircle
} from "react-icons/fa";

import "../../styles/TenantTable.css";

function TenantTable({
  tenants,
  onView,
  onEdit,
  onDelete
}) {

  if (tenants.length === 0) {

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

          👥 No Tenants Found

        </div>

      </div>

    );

  }

  return (

    <div className="table-container">

      <table className="property-table">

        <thead>

          <tr>

            <th>Tenant</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Status</th>

            <th style={{ textAlign: "center" }}>

              Actions

            </th>

          </tr>

        </thead>

        <tbody>

          {

            tenants.map((tenant) => (

              <tr key={tenant.id}>

                <td>

                  <div className="property-info">

                    <div
                      className="property-avatar"
                      style={{
                        background: "#eef4ff",
                        color: "#2563eb"
                      }}
                    >

                      <FaUserCircle />

                    </div>

                    <div>

                      <h4>

                        {tenant.tenant_name}

                      </h4>

                      <span>

                        Tenant #{tenant.id}

                      </span>

                    </div>

                  </div>

                </td>

                <td>

                  <div className="address">

                    <FaEnvelope />

                    {tenant.email}

                  </div>

                </td>

                <td>

                  <div className="address">

                    <FaPhoneAlt />

                    {tenant.phone}

                  </div>

                </td>

                <td>

                  <span className="status active">

                    Active

                  </span>

                </td>

                <td>

                  <div className="actions">

                    <button
                      className="view"
                      title="View Tenant"
                      onClick={() => onView(tenant)}
                    >

                      <FaEye />

                    </button>

                    <button
                      className="edit"
                      title="Edit Tenant"
                      onClick={() => onEdit(tenant)}
                    >

                      <FaEdit />

                    </button>

                    <button
                      className="delete"
                      title="Delete Tenant"
                      onClick={() => onDelete(tenant)}
                    >

                      <FaTrash />

                    </button>

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

export default TenantTable;