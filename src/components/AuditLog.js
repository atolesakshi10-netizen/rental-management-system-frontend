import React, { useEffect, useState } from "react";
import axios from "axios";

function AuditLog() {

    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "https://rental-management-system-backend-0h42.onrender.com/audit/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log(response.data);

            setLogs(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed to load audit logs");
        }
    };

    return (
        <div className="container mt-5">

            <h2>Audit Logs</h2>

            <table className="table table-bordered">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Email</th>
                        <th>Action</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>

                <tbody>

                    {logs.map((log) => (

                        <tr key={log.id}>
                            <td>{log.id}</td>
                            <td>{log.user_email}</td>
                            <td>{log.action}</td>
                            <td>{log.timestamp}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default AuditLog;