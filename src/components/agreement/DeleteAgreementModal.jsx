import API from "../../services/api";
import "../../styles/Modal.css";

function DeleteAgreementModal({
  show,
  agreement,
  onClose,
  onSuccess
}) {

  if (!show || !agreement) return null;

  const handleDelete = async () => {

    try {

      await API.delete(`/agreements/${agreement.id}`);

      alert("✅ Agreement Deleted Successfully");

      onSuccess();

      onClose();

    }

    catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.detail);

      }

      else {

        alert("Unable to delete agreement.");

      }

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>

          🗑 Delete Agreement

        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            color: "#475569"
          }}
        >

          Are you sure you want to delete

          <br /><br />

          <strong>

            Agreement #{agreement.id}

          </strong>

          ?

        </p>

        <div
          style={{
            background: "#fef2f2",
            border: "1px solid #fecaca",
            color: "#dc2626",
            padding: "12px",
            borderRadius: "10px",
            marginTop: "20px",
            marginBottom: "20px"
          }}
        >

          ⚠ This action cannot be undone.

        </div>

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

            Delete Agreement

          </button>

        </div>

      </div>

    </div>

  );

}

export default DeleteAgreementModal;