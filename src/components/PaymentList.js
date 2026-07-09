import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function PaymentList() {

    const [payments, setPayments] = useState([]);

    const [formData, setFormData] = useState({
        tenant_id: "",
        amount: "",
        payment_date: ""
    });

    useEffect(() => {
        fetchPayments();
    }, []);

    const fetchPayments = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://127.0.0.1:8000/payments",
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

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.post(
                "http://127.0.0.1:8000/payments",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            fetchPayments();

            setFormData({
                tenant_id: "",
                amount: "",
                payment_date: ""
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
                        Payments
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            <div className="col-md-4">

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Tenant ID"
                                    name="tenant_id"
                                    value={formData.tenant_id}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-4">

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Amount"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-4">

                                <input
                                    type="date"
                                    className="form-control"
                                    name="payment_date"
                                    value={formData.payment_date}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary mt-3"
                        >
                            Add Payment
                        </button>

                    </form>

                </div>


                <div className="card mt-4 p-4 shadow">

                    <h3 className="mb-3">
                        Payment Records
                    </h3>

                    <table className="table table-bordered">

                        <thead>

                            <tr>

                                <th>ID</th>
                                <th>Tenant ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Receipt</th>

                            </tr>

                        </thead>

                        <tbody>

                            {payments.map((payment) => (

                                <tr key={payment.id}>

                                    <td>{payment.id}</td>

                                    <td>{payment.tenant_id}</td>

                                    <td>₹{payment.amount}</td>

                                    <td>{payment.payment_date}</td>

                                    <td>

                                        <a
                                            href={`http://127.0.0.1:8000/receipt/${payment.id}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-success"
                                        >
                                            Download Receipt
                                        </a>

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

export default PaymentList;