import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Profile.css";

function Profile() {

    return (

        <>
            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="profile-card">

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="profile"
                    />

                    <h2>Admin User</h2>

                    <p className="role">
                        Administrator
                    </p>

                    <hr />

                    <div className="info">

                        <h5>Email</h5>
                        <p>admin@gmail.com</p>

                        <h5>Phone</h5>
                        <p>+91 9876543210</p>

                        <h5>Address</h5>
                        <p>Pune, Maharashtra</p>

                        <h5>Joined</h5>
                        <p>12 June 2026</p>

                    </div>

                    <button className="btn btn-primary">
                        Edit Profile
                    </button>

                </div>

            </div>

        </>

    );

}

export default Profile;