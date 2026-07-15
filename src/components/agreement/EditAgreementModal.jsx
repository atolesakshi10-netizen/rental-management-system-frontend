import { useEffect, useState } from "react";
import API from "../../services/api";
import "../../styles/Modal.css";

function EditAgreementModal({
  show,
  agreement,
  onClose,
  onSuccess
}) {

  const [propertyId, setPropertyId] = useState("");
  const [tenantId, setTenantId] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {

    if (agreement) {

      setPropertyId(agreement.property_id);
      setTenantId(agreement.tenant_id);
      setMonthlyRent(agreement.monthly_rent);
      setStartDate(agreement.start_date);
      setEndDate(agreement.end_date);

    }

  }, [agreement]);

  if (!show || !agreement) return null;

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await API.put(`/agreements/${agreement.id}`, {

        property_id: Number(propertyId),
        tenant_id: Number(tenantId),
        monthly_rent: Number(monthlyRent),
        start_date: startDate,
        end_date: endDate

      });

      alert("✅ Agreement Updated Successfully");

      onSuccess();

      onClose();

    }

    catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.detail);

      }

      else {

        alert("Unable to update agreement.");

      }

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>

          ✏ Edit Agreement

        </h2>

        <form onSubmit={handleUpdate}>

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

              Save Changes

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default EditAgreementModal;