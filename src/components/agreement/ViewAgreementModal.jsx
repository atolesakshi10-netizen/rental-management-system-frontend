import {
  FaFileContract,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaBuilding,
  FaUser,
  FaTimesCircle,
  FaShieldAlt
} from "react-icons/fa";

import "../../styles/Modal.css";

function ViewAgreementModal({
  show,
  agreement,
  onClose
}) {

  if (!show || !agreement) return null;

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <div className="modal-header">

          <h2>

            <FaFileContract />

            &nbsp; Agreement Details

          </h2>

        </div>

        <div className="property-details">

          <div className="detail-card">

            <label>

              Agreement ID

            </label>

            <p>

              #{agreement.id}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Property ID

            </label>

            <p>

              <FaBuilding />

              &nbsp;

              {agreement.property_id}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Tenant ID

            </label>

            <p>

              <FaUser />

              &nbsp;

              {agreement.tenant_id}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Monthly Rent

            </label>

            <p>

              <FaMoneyBillWave />

              &nbsp;

              ₹{agreement.monthly_rent}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Start Date

            </label>

            <p>

              <FaCalendarAlt />

              &nbsp;

              {agreement.start_date}

            </p>

          </div>

          <div className="detail-card">

            <label>

              End Date

            </label>

            <p>

              <FaCalendarAlt />

              &nbsp;

              {agreement.end_date}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Blockchain Status

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

export default ViewAgreementModal;