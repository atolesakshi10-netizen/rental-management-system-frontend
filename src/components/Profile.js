import { useEffect, useState } from "react";
import API from "../services/api";

import PageHeader from "./PageHeader";

import ProfileCard from "./profile/ProfileCard";
import ProfileInfo from "./profile/ProfileInfo";
import ChangePassword from "./profile/ChangePassword";

import "../styles/Profile.css";

function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const response = await API.get("/auth/profile");

      setUser(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="dashboard-content">

      <PageHeader

        title="👤 Profile"

        subtitle="Manage your account information"

        buttonText=""

      />

      <div className="profile-container">

        <ProfileCard

          user={user}

        />

        <div className="profile-right">

          <ProfileInfo

            user={user}

            onSuccess={fetchProfile}

          />

          <ChangePassword />

        </div>

      </div>

    </div>

  );

}

export default Profile;