import React, { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./BlockchainView.css";

function BlockchainView() {

    const [agreements, setAgreements] = useState([]);
    const [payments, setPayments] = useState([]);

    const [agreementResults, setAgreementResults] = useState({});
    const [paymentResults, setPaymentResults] = useState({});

    useEffect(() => {

        fetchAgreements();
        fetchPayments();

    }, []);

    const fetchAgreements = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get(
                "/agreements/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setAgreements(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const fetchPayments = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get(
                "/payments/",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setPayments(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const verifyAgreement = async (id) => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get(
                `/agreements/verify/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setAgreementResults({
                ...agreementResults,
                [id]: response.data.status
            });

        } catch (error) {

            console.log(error);

        }

    };

    const verifyPayment = async (id) => {

        try {

            const token = localStorage.getItem("token");

            const response = await API.get(
                `/payments/verify/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setPaymentResults({
                ...paymentResults,
                [id]: response.data.status
            });

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <>

            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="card p-4 shadow">

                    <h2 className="mb-4">
                        Blockchain Verification
                    </h2>

                    <h4>Agreement Verification</h4>

                    <table className="table table-bordered table-striped">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>
                                <th>Property ID</th>
                                <th>Tenant ID</th>
                                <th>Verify</th>
                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {agreements.map((agreement) => (

                                <tr key={agreement.id}>

                                    <td>{agreement.id}</td>
                                    <td>{agreement.property_id}</td>
                                    <td>{agreement.tenant_id}</td>

                                    <td>

                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() =>
                                                verifyAgreement(
                                                    agreement.id
                                                )
                                            }
                                        >
                                            Verify
                                        </button>

                                    </td>

                                    <td>

                                        {agreementResults[agreement.id] &&
                                            (
                                                agreementResults[agreement.id] === "VALID"
                                                    ?
                                                    <span className="badge bg-success">
                                                        VALID
                                                    </span>
                                                    :
                                                    <span className="badge bg-danger">
                                                        TAMPERED
                                                    </span>
                                            )}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                    <hr />

                    <h4>Payment Verification</h4>

                    <table className="table table-bordered table-striped">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>
                                <th>Agreement ID</th>
                                <th>Amount</th>
                                <th>Verify</th>
                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {payments.map((payment) => (

                                <tr key={payment.id}>

                                    <td>{payment.id}</td>
                                    <td>{payment.agreement_id}</td>
                                    <td>₹{payment.amount}</td>

                                    <td>

                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() =>
                                                verifyPayment(
                                                    payment.id
                                                )
                                            }
                                        >
                                            Verify
                                        </button>

                                    </td>

                                    <td>

                                        {paymentResults[payment.id] &&
                                            (
                                                paymentResults[payment.id] === "VALID"
                                                    ?
                                                    <span className="badge bg-success">
                                                        VALID
                                                    </span>
                                                    :
                                                    <span className="badge bg-danger">
                                                        TAMPERED
                                                    </span>
                                            )}

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