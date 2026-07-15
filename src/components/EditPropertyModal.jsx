import { useState, useEffect } from "react";
import API from "../services/api";
import "../styles/Modal.css";

function EditPropertyModal({
  show,
  property,
  onClose,
  onSuccess
}) {

  const [propertyName, setPropertyName] = useState("");
  const [address, setAddress] = useState("");
  const [rentAmount, setRentAmount] = useState("");

  useEffect(() => {

    if (property) {

      setPropertyName(property.property_name);
      setAddress(property.address);
      setRentAmount(property.rent_amount);

    }

  }, [property]);

  if (!show || !property) return null;

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await API.put(`/properties/${property.id}`, {

        property_name: propertyName,
        address: address,
        rent_amount: Number(rentAmount)

      });

      alert("✅ Property Updated Successfully");

      onSuccess();
      onClose();

    }

    catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.detail);

      }

      else {

        alert("Unable to update property.");

      }

    }

  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>✏ Edit Property</h2>

        <form onSubmit={handleUpdate}>

          <div className="modal-input">

            <label>Property Name</label>

            <input
              type="text"
              value={propertyName}
              onChange={(e)=>setPropertyName(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>Address</label>

            <input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              required
            />

          </div>

          <div className="modal-input">

            <label>Rent Amount</label>

            <input
              type="number"
              value={rentAmount}
              onChange={(e)=>setRentAmount(e.target.value)}
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

export default EditPropertyModal;