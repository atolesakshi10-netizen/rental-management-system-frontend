import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaTimesCircle
} from "react-icons/fa";

import "../../styles/Modal.css";

function ViewTenantModal({
  show,
  tenant,
  onClose
}) {

  if (!show || !tenant) return null;

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <div className="modal-header">

          <h2>

            <FaUserCircle />

            &nbsp; Tenant Details

          </h2>

        </div>

        <div className="property-details">

          <div className="detail-card">

            <label>

              Tenant Name

            </label>

            <p>

              {tenant.tenant_name}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Email

            </label>

            <p>

              <FaEnvelope />

              &nbsp;

              {tenant.email}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Phone

            </label>

            <p>

              <FaPhoneAlt />

              &nbsp;

              {tenant.phone}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Status

            </label>

            <span className="status active">

              Active

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

export default ViewTenantModal;