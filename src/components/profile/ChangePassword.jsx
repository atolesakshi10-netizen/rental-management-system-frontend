import { useState } from "react";
import API from "../../services/api";
import "../../styles/Profile.css";

function ChangePassword() {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (newPassword !== confirmPassword) {

      alert("Passwords do not match.");

      return;

    }

    try {

      await API.put("/auth/change-password", {

        current_password: currentPassword,
        new_password: newPassword

      });

      alert("✅ Password Changed Successfully");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    }

    catch (error) {

      console.log(error);

      if (error.response) {

        alert(error.response.data.detail);

      }

      else {

        alert("Unable to change password.");

      }

    }

  };

  return (

    <div className="profile-section">

      <h3>

        Change Password

      </h3>

      <form onSubmit={handleSubmit}>

        <div className="modal-input">

          <label>

            Current Password

          </label>

          <input
            type="password"
            value={currentPassword}
            onChange={(e)=>setCurrentPassword(e.target.value)}
            required
          />

        </div>

        <div className="modal-input">

          <label>

            New Password

          </label>

          <input
            type="password"
            value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
            required
          />

        </div>

        <div className="modal-input">

          <label>

            Confirm Password

          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required
          />

        </div>

        <button
          className="save-btn"
          type="submit"
        >

          Update Password

        </button>

      </form>

    </div>

  );

}

export default ChangePassword;