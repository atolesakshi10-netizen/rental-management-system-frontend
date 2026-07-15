import { useEffect, useState } from "react";
import API from "../../services/api";
import "../../styles/Modal.css";

function EditTenantModal({
  show,
  tenant,
  onClose,
  onSuccess
}) {

  const [tenantName, setTenantName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {

    if (tenant) {

      setTenantName(tenant.tenant_name);
      setEmail(tenant.email);
      setPhone(tenant.phone);

    }

  }, [tenant]);

  if (!show || !tenant) return null;

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await API.put(`/tenants/${tenant.id}`, {

        tenant_name: tenantName,
        email: email,
        phone: phone

      });

      alert("✅ Tenant Updated Successfully");

      onSuccess();

      onClose();

    }

    catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.detail);

      }

      else {

        alert("Unable to update tenant.");

      }

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>

          ✏ Edit Tenant

        </h2>

        <form onSubmit={handleUpdate}>

          <div className="modal-input">

            <label>

              Tenant Name

            </label>

            <input
              type="text"
              value={tenantName}
              onChange={(e) => setTenantName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPhone(e.target.value)}
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

export default EditTenantModal;