import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Notifications.css";

function Notifications() {

    return (

        <>
            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="notification-card">

                    <h2>🔔 Notifications</h2>

                    <div className="notification-item">
                        💰 Rent payment received from John Doe
                        <span>2 mins ago</span>
                    </div>

                    <div className="notification-item">
                        📄 Agreement AG-2026-001 expires in 5 days
                        <span>1 hour ago</span>
                    </div>

                    <div className="notification-item">
                        🔧 Maintenance request pending
                        <span>3 hours ago</span>
                    </div>

                    <div className="notification-item">
                        🏠 New property added successfully
                        <span>5 hours ago</span>
                    </div>

                    <div className="notification-item">
                        👤 New tenant registered
                        <span>Yesterday</span>
                    </div>

                </div>

            </div>

        </>

    );

}

export default Notifications;