import { useEffect, useState } from "react";
import API from "../../services/api";
import "../../styles/Modal.css";

function EditPaymentModal({
  show,
  payment,
  onClose,
  onSuccess
}) {

  const [agreementId, setAgreementId] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  useEffect(() => {

    if (payment) {

      setAgreementId(payment.agreement_id);
      setAmount(payment.amount);
      setPaymentDate(payment.payment_date);
      setPaymentStatus(payment.payment_status);

    }

  }, [payment]);

  if (!show || !payment) return null;

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await API.put(`/payments/${payment.id}`, {

        agreement_id: Number(agreementId),
        amount: Number(amount),
        payment_date: paymentDate,
        payment_status: paymentStatus

      });

      alert("✅ Payment Updated Successfully");

      onSuccess();

      onClose();

    }

    catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.detail);

      }

      else {

        alert("Unable to update payment.");

      }

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>

          ✏ Edit Payment

        </h2>

        <form onSubmit={handleUpdate}>

          <div className="modal-input">

            <label>

              Agreement ID

            </label>

            <input
              type="number"
              value={agreementId}
              onChange={(e) => setAgreementId(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>

              Amount

            </label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>

              Payment Date

            </label>

            <input
              type="date"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>

              Payment Status

            </label>

            <select
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value)}
            >

              <option value="Paid">

                Paid

              </option>

              <option value="Pending">

                Pending

              </option>

            </select>

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

export default EditPaymentModal;