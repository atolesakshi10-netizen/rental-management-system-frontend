import API from "../../services/api";
import "../../styles/Modal.css";

function DeletePaymentModal({
  show,
  payment,
  onClose,
  onSuccess
}) {

  if (!show || !payment) return null;

  const handleDelete = async () => {

    try {

      await API.delete(`/payments/${payment.id}`);

      alert("✅ Payment Deleted Successfully");

      onSuccess();

      onClose();

    }

    catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.detail);

      }

      else {

        alert("Unable to delete payment.");

      }

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>

          🗑 Delete Payment

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

            Payment #{payment.id}

          </strong>

          ?

        </p>

        <div
          style={{
            background: "#FEF2F2",
            border: "1px solid #FECACA",
            color: "#DC2626",
            padding: "14px",
            borderRadius: "12px",
            marginTop: "20px",
            marginBottom: "25px",
            textAlign: "center",
            fontWeight: "600"
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
              background: "#DC2626"
            }}
            onClick={handleDelete}
          >

            Delete Payment

          </button>

        </div>

      </div>

    </div>

  );

}

export default DeletePaymentModal;