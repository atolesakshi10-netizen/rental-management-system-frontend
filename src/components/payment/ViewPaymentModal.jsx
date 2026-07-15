import {
  FaMoneyBillWave,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaFileInvoiceDollar,
  FaShieldAlt
} from "react-icons/fa";

import "../../styles/Modal.css";

function ViewPaymentModal({
  show,
  payment,
  onClose
}) {

  if (!show || !payment) return null;

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <div className="modal-header">

          <h2>

            <FaFileInvoiceDollar />

            &nbsp; Payment Details

          </h2>

        </div>

        <div className="property-details">

          <div className="detail-card">

            <label>

              Payment ID

            </label>

            <p>

              #{payment.id}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Agreement ID

            </label>

            <p>

              {payment.agreement_id}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Amount

            </label>

            <p>

              <FaMoneyBillWave />

              &nbsp;

              ₹{payment.amount}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Payment Date

            </label>

            <p>

              <FaCalendarAlt />

              &nbsp;

              {payment.payment_date}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Payment Status

            </label>

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

                Pending

              </span>

            }

          </div>

          <div className="detail-card">

            <label>

              Blockchain

            </label>

            <span className="status active">

              <FaShieldAlt />

              &nbsp;

              Verified

            </span>

          </div>

        </div>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >

            <FaTimesCircle />

            &nbsp;

            Close

          </button>

        </div>

      </div>

    </div>

  );

}

export default ViewPaymentModal;