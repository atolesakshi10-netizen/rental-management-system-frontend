import { useState } from "react";
import API from "../../services/api";
import "../../styles/Modal.css";

function AddAgreementModal({
  show,
  onClose,
  onSuccess
}) {

  const [propertyId, setPropertyId] = useState("");
  const [tenantId, setTenantId] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  if (!show) return null;

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/agreements/", {

        property_id: Number(propertyId),
        tenant_id: Number(tenantId),
        monthly_rent: Number(monthlyRent),
        start_date: startDate,
        end_date: endDate

      });

      alert("✅ Agreement Added Successfully");

      setPropertyId("");
      setTenantId("");
      setMonthlyRent("");
      setStartDate("");
      setEndDate("");

      onSuccess();

      onClose();

    }

    catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.detail);

      }

      else {

        alert("Unable to add agreement.");

      }

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>

          📄 Add New Agreement

        </h2>

        <form onSubmit={handleSubmit}>

          <div className="modal-input">

            <label>

              Property ID

            </label>

            <input
              type="number"
              value={propertyId}
              onChange={(e) => setPropertyId(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>

              Tenant ID

            </label>

            <input
              type="number"
              value={tenantId}
              onChange={(e) => setTenantId(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>

              Monthly Rent

            </label>

            <input
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>

              Start Date

            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>

              End Date

            </label>

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />

          </div>

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >

              Cancel

            </button>

            <button
              type="submit"
              className="save-btn"
            >

              Save Agreement

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default AddAgreementModal;