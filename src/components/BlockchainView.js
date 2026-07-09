import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./BlockchainView.css";

function BlockchainView() {

    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetchHashes();
    }, []);

    const fetchHashes = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://127.0.0.1:8000/blockchain",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setRecords(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <>
            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="blockchain-card">

                    <h2>
                        Blockchain Verification
                    </h2>

                    <table className="table">

                        <thead>

                            <tr>

                                <th>ID</th>

                                <th>Agreement ID</th>

                                <th>Hash</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {records.map((item) => (

                                <tr key={item.id}>

                                    <td>{item.id}</td>

                                    <td>{item.agreement_id}</td>

                                    <td>{item.hash_value}</td>

                                    <td>

                                        <span className="verified">

                                            Verified

                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </>

    );

}

export default BlockchainView;