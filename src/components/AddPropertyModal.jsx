import { useState } from "react";
import API from "../services/api";
import "../styles/Modal.css";

function AddPropertyModal({ show, onClose, onSuccess }) {

  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [rentAmount, setRentAmount] = useState("");

  if (!show) return null;

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/properties/", {
        property_name: propertyName,
        address: address,
        rent_amount: Number(rentAmount)
      });

      setPropertyName("");
      setAddress("");
      setRentAmount("");

      onSuccess();
      onClose();

      alert("✅ Property Added Successfully");

    } catch (error) {

      console.log(error);

      if (error.response) {
        alert(error.response.data.detail || "Unable to add property");
      } else {
        alert(error.message);
      }

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>🏠 Add New Property</h2>

        <form onSubmit={handleSubmit}>

          <div className="modal-input">

            <label>Property Name</label>

            <input
              type="text"
              value={propertyName}
              onChange={(e) => setPropertyName(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>Address</label>

            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>Rent Amount</label>

            <input
              type="number"
              value={rentAmount}
              onChange={(e) => setRentAmount(e.target.value)}
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
              Save Property
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default AddPropertyModal;