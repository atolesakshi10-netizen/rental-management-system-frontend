import "../styles/Modal.css";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBuilding,
  FaTimesCircle
} from "react-icons/fa";

function ViewPropertyModal({
  show,
  property,
  onClose
}) {

  if (!show || !property) return null;

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <div className="modal-header">

          <h2>

            <FaBuilding />

            &nbsp; Property Details

          </h2>

        </div>

        <div className="property-details">

          <div className="detail-card">

            <label>

              Property Name

            </label>

            <p>

              {property.property_name}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Address

            </label>

            <p>

              <FaMapMarkerAlt />

              &nbsp;

              {property.address}

            </p>

          </div>

          <div className="detail-card">

            <label>

              Rent Amount

            </label>

            <p>

              <FaMoneyBillWave />

              &nbsp;

              ₹{property.rent_amount}

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

export default ViewPropertyModal;