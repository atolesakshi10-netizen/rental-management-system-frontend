import { useState } from "react";
import API from "../../services/api";
import "../../styles/Modal.css";

function AddTenantModal({
  show,
  onClose,
  onSuccess
}) {

  const [tenantName, setTenantName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  if (!show) return null;

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/tenants/", {

        tenant_name: tenantName,
        email: email,
        phone: phone

      });

      setTenantName("");
      setEmail("");
      setPhone("");

      alert("✅ Tenant Added Successfully");

      onSuccess();

      onClose();

    }

    catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.detail);

      }

      else {

        alert("Unable to add tenant.");

      }

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>

          👤 Add New Tenant

        </h2>

        <form onSubmit={handleSubmit}>

          <div className="modal-input">

            <label>

              Tenant Name

            </label>

            <input
              type="text"
              value={tenantName}
              onChange={(e)=>setTenantName(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>

              Email

            </label>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>

              Phone

            </label>

            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
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

              Save Tenant

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default AddTenantModal;