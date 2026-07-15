import {
  FaEye,
  FaEdit,
  FaTrash,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock
} from "react-icons/fa";

import "../../styles/PaymentTable.css";

function PaymentTable({
  payments,
  onView,
  onEdit,
  onDelete
}) {

  if (payments.length === 0) {

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

          💳 No Payments Found

        </div>

      </div>

    );

  }

  return (

    <div className="table-container">

      <table className="property-table">

        <thead>

          <tr>

            <th>Payment</th>

            <th>Date</th>

            <th>Amount</th>

            <th>Status</th>

            <th style={{ textAlign: "center" }}>

              Actions

            </th>

          </tr>

        </thead>

        <tbody>

          {

            payments.map((payment) => (

              <tr key={payment.id}>

                <td>

                  <div className="property-info">

                    <div
                      className="property-avatar"
                      style={{
                        background: "#ecfeff",
                        color: "#0891b2"
                      }}
                    >

                      <FaMoneyBillWave />

                    </div>

                    <div>

                      <h4>

                        Payment #{payment.id}

                      </h4>

                      <span>

                        Agreement #{payment.agreement_id}

                      </span>

                    </div>

                  </div>

                </td>

                <td>

                  <div className="address">

                    <FaCalendarAlt />

                    {payment.payment_date}

                  </div>

                </td>

                <td>

                  <strong>

                    ₹{payment.amount}

                  </strong>

                </td>

                <td>

                  {

                    payment.payment_status === "Paid"

                    ?

                    <span className="status active">

                      <FaCheckCircle />

                      &nbsp;

                      Paid

                    </span>

                    :

                    <span
                      className="status"
                      style={{
                        background:"#fff7ed",
                        color:"#ea580c"
                      }}
                    >

                      <FaClock />

                      &nbsp;

                      Pending

                    </span>

                  }

                </td>

                <td>

                  <div className="actions">

                    <button
                      className="view"
                      onClick={() => onView(payment)}
                    >

                      <FaEye />

                    </button>

                    <button
                      className="edit"
                      onClick={() => onEdit(payment)}
                    >

                      <FaEdit />

                    </button>

                    <button
                      className="delete"
                      onClick={() => onDelete(payment)}
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

export default PaymentTable;