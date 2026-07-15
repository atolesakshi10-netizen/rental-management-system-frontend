import {
  FaEdit,
  FaTrash,
  FaEye,
  FaMapMarkerAlt
} from "react-icons/fa";

import "../styles/PropertyTable.css";

function PropertyTable({
  properties,
  onView,
  onEdit,
  onDelete
}) {

  if (properties.length === 0) {

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

          🏠 No Properties Found

        </div>

      </div>

    );

  }

  return (

    <div className="table-container">

      <table className="property-table">

        <thead>

          <tr>

            <th>Property</th>

            <th>Address</th>

            <th>Rent</th>

            <th>Status</th>

            <th style={{ textAlign: "center" }}>
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {

            properties.map((property) => (

              <tr key={property.id}>

                {/* Property */}

                <td>

                  <div className="property-info">

                    <div className="property-avatar">

                      🏠

                    </div>

                    <div>

                      <h4>

                        {property.property_name}

                      </h4>

                      <span>

                        Property #{property.id}

                      </span>

                    </div>

                  </div>

                </td>

                {/* Address */}

                <td>

                  <div className="address">

                    <FaMapMarkerAlt />

                    {property.address}

                  </div>

                </td>

                {/* Rent */}

                <td>

                  <strong>

                    ₹ {property.rent_amount}

                  </strong>

                </td>

                {/* Status */}

                <td>

                  <span className="status active">

                    Active

                  </span>

                </td>

                {/* Actions */}

                <td>

                  <div className="actions">

                    {/* View */}

                    <button
                      className="view"
                      title="View Property"
                      onClick={() => onView(property)}
                    >

                      <FaEye />

                    </button>

                    {/* Edit */}

                    <button
                      className="edit"
                      title="Edit Property"
                      onClick={() => onEdit(property)}
                    >

                      <FaEdit />

                    </button>

                    {/* Delete */}

                    <button
                      className="delete"
                      title="Delete Property"
                      onClick={() => onDelete(property)}
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

export default PropertyTable;