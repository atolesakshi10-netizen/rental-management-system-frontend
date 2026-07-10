import React, { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function AuditLog() {

    const [logs, setLogs] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get(
                "/audit/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setLogs(response.data);

        } catch (error) {

            console.log(error);

            alert("Failed to load audit logs");
        }

    };

    const filteredLogs = logs.filter(
        (log) =>
            log.user_email
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            log.action
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (

        <>
            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="card p-4 shadow">

                    <h2 className="mb-4">
                        Audit Logs
                    </h2>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search by Email or Action..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <table className="table table-bordered table-striped">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>
                                <th>User Email</th>
                                <th>Action</th>
                                <th>Timestamp</th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredLogs.length > 0 ? (

                                filteredLogs.map((log) => (

                                    <tr key={log.id}>

                                        <td>{log.id}</td>
                                        <td>{log.user_email}</td>
                                        <td>{log.action}</td>
                                        <td>{log.timestamp}</td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="text-center"
                                    >
                                        No Audit Logs Found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </>

    );

}

export default AuditLog;