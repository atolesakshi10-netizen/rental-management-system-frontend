import API from "../services/api";
import "../styles/Modal.css";

function DeletePropertyModal({
  show,
  property,
  onClose,
  onSuccess
}) {

  if (!show || !property) return null;

  const handleDelete = async () => {

    try {

      await API.delete(`/properties/${property.id}`);

      alert("✅ Property Deleted Successfully");

      onSuccess();

      onClose();

    } catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.detail);

      } else {

        alert("Unable to delete property.");

      }

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>🗑 Delete Property</h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            color: "#475569"
          }}
        >

          Are you sure you want to delete

          <br /><br />

          <strong>{property.property_name}</strong>

          ?

        </p>

        <p
          style={{
            color: "#ef4444",
            marginTop: "15px"
          }}
        >

          This action cannot be undone.

        </p>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >

            Cancel

          </button>

          <button
            className="save-btn"
            style={{
              background: "#dc2626"
            }}
            onClick={handleDelete}
          >

            Delete

          </button>

        </div>

      </div>

    </div>

  );

}

export default DeletePropertyModal;