import { FaUserCircle, FaEnvelope, FaUserShield } from "react-icons/fa";
import "../../styles/Profile.css";

function ProfileCard({ user }) {

  if (!user) return null;

  return (

    <div className="profile-card">

      <div className="profile-avatar">

        <FaUserCircle />

      </div>

      <h2>{user.username}</h2>

      <p>

        <FaEnvelope />

        &nbsp;

        {user.email}

      </p>

      <div className="role-badge">

        <FaUserShield />

        &nbsp;

        {user.role}

      </div>

    </div>

  );

}

export default ProfileCard;