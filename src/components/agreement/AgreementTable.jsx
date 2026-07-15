import {
  FaEye,
  FaEdit,
  FaTrash,
  FaFileContract,
  FaCalendarAlt,
  FaMoneyBillWave
} from "react-icons/fa";

import "../../styles/AgreementTable.css";

function AgreementTable({
  agreements,
  onView,
  onEdit,
  onDelete
}) {

  if (agreements.length === 0) {

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

          📄 No Agreements Found

        </div>

      </div>

    );

  }

  return (

    <div className="table-container">

      <table className="property-table">

        <thead>

          <tr>

            <th>Agreement</th>

            <th>Duration</th>

            <th>Rent</th>

            <th>Status</th>

            <th style={{ textAlign: "center" }}>

              Actions

            </th>

          </tr>

        </thead>

        <tbody>

          {

            agreements.map((agreement) => (

              <tr key={agreement.id}>

                <td>

                  <div className="property-info">

                    <div
                      className="property-avatar"
                      style={{
                        background: "#EEF4FF",
                        color: "#2563EB"
                      }}
                    >

                      <FaFileContract />

                    </div>

                    <div>

                      <h4>

                        Agreement #{agreement.id}

                      </h4>

                      <span>

                        Property #{agreement.property_id}
                        {" | "}
                        Tenant #{agreement.tenant_id}

                      </span>

                    </div>

                  </div>

                </td>

                <td>

                  <div className="address">

                    <FaCalendarAlt />

                    {agreement.start_date}

                    {" - "}

                    {agreement.end_date}

                  </div>

                </td>

                <td>

                  <div className="address">

                    <FaMoneyBillWave />

                    ₹{agreement.monthly_rent}

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
                      onClick={() => onView(agreement)}
                    >

                      <FaEye />

                    </button>

                    <button
                      className="edit"
                      onClick={() => onEdit(agreement)}
                    >

                      <FaEdit />

                    </button>

                    <button
                      className="delete"
                      onClick={() => onDelete(agreement)}
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

export default AgreementTable;