import { useState, useEffect } from "react";
import API from "../../services/api";

import "../../styles/Profile.css";

function ProfileInfo({

  user,
  onSuccess

}) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    if (user) {

      setUsername(user.username);

      setEmail(user.email);

    }

  }, [user]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.put("/auth/profile", {

        username,

        email

      });

      alert("✅ Profile Updated");

      onSuccess();

    }

    catch (error) {

      console.log(error);

      alert("Unable to update profile.");

    }

  };

  return (

    <div className="profile-section">

      <h3>

        Personal Information

      </h3>

      <form onSubmit={handleSubmit}>

        <div className="modal-input">

          <label>

            Username

          </label>

          <input
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
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

        <button
          className="save-btn"
          type="submit"
        >

          Save Changes

        </button>

      </form>

    </div>

  );

}

export default ProfileInfo;