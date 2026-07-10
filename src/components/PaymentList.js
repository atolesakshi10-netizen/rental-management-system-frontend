import { useEffect, useState } from "react";
import API from "../services/api";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function PaymentList() {

    const [payments, setPayments] = useState([]);

    const [formData, setFormData] = useState({
        agreement_id: "",
        amount: "",
        payment_date: "",
        payment_status: "Paid"
    });

    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchPayments();
    }, []);

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

            await API.post(
                "/payments/",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            fetchPayments();

            setFormData({
                agreement_id: "",
                amount: "",
                payment_date: "",
                payment_status: "Paid"
            });

        } catch (error) {

            console.log(error);

        }

    };

    const filteredPayments = payments.filter(
        (payment) =>
            payment.agreement_id
                .toString()
                .includes(search) ||

            payment.payment_status
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
                        Payments
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="row">

                            <div className="col-md-3">

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Agreement ID"
                                    name="agreement_id"
                                    value={formData.agreement_id}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-3">

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

                            <div className="col-md-3">

                                <input
                                    type="date"
                                    className="form-control"
                                    name="payment_date"
                                    value={formData.payment_date}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-3">

                                <select
                                    className="form-control"
                                    name="payment_status"
                                    value={formData.payment_status}
                                    onChange={handleChange}
                                >
                                    <option value="Paid">Paid</option>
                                    <option value="Pending">Pending</option>
                                </select>

                            </div>

                        </div>

                        <button
                            className="btn btn-primary mt-3"
                            type="submit"
                        >
                            Add Payment
                        </button>

                    </form>

                </div>

                <div className="card mt-4 p-4 shadow">

                    <h3 className="mb-3">
                        Payment Records
                    </h3>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search by Agreement ID or Status..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <table className="table table-bordered table-striped">

                        <thead className="table-dark">

                            <tr>

                                <th>ID</th>
                                <th>Agreement ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredPayments.length > 0 ? (

                                filteredPayments.map((payment) => (

                                    <tr key={payment.id}>

                                        <td>{payment.id}</td>
                                        <td>{payment.agreement_id}</td>
                                        <td>₹{payment.amount}</td>
                                        <td>{payment.payment_date}</td>
                                        <td>{payment.payment_status}</td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="text-center"
                                    >
                                        No Payments Found
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

export default PaymentList;