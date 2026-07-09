import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Settings.css";

function Settings() {

    const logout = () => {

        localStorage.removeItem("token");
        window.location.href = "/";

    };

    return (

        <>
            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="row">

                    {/* Profile Card */}

                    <div className="col-md-6">

                        <div className="settings-card">

                            <h3>👤 Profile</h3>

                            <hr />

                            <h5>Name</h5>
                            <p>Admin</p>

                            <h5>Email</h5>
                            <p>admin@gmail.com</p>

                            <h5>Role</h5>
                            <p>Administrator</p>

                        </div>

                    </div>

                    {/* System Card */}

                    <div className="col-md-6">

                        <div className="settings-card">

                            <h3>⚙ System Information</h3>

                            <hr />

                            <h5>Application</h5>
                            <p>Rental Management System</p>

                            <h5>Version</h5>
                            <p>2.0</p>

                            <h5>Framework</h5>
                            <p>React + FastAPI</p>

                        </div>

                    </div>

                </div>

                <div className="row mt-4">

                    <div className="col-md-4">

                        <div className="settings-card text-center">

                            <h4>🌙 Dark Mode</h4>

                            <button className="btn btn-dark mt-3">
                                Enable
                            </button>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="settings-card text-center">

                            <h4>🔒 Change Password</h4>

                            <button className="btn btn-primary mt-3">
                                Change
                            </button>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="settings-card text-center">

                            <h4>🚪 Logout</h4>

                            <button
                                className="btn btn-danger mt-3"
                                onClick={logout}
                            >
                                Logout
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Settings;