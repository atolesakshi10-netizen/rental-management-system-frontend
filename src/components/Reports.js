import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

import { Line, Pie, Bar } from "react-chartjs-2";

import "./Reports.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    Tooltip,
    Legend
);

function Reports() {

    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Monthly Revenue",
                data: [1200, 1800, 2200, 3000, 4200, 5200],
                borderColor: "#2563eb",
                backgroundColor: "#2563eb",
                tension: 0.4
            }
        ]
    };

    const pieData = {
        labels: ["Rent", "Maintenance", "Other"],
        datasets: [
            {
                data: [70, 20, 10],
                backgroundColor: [
                    "#2563eb",
                    "#16a34a",
                    "#f59e0b"
                ]
            }
        ]
    };

    const barData = {
        labels: ["Properties", "Tenants", "Agreements", "Payments"],
        datasets: [
            {
                label: "Count",
                data: [5, 3, 1, 3],
                backgroundColor: [
                    "#2563eb",
                    "#16a34a",
                    "#f59e0b",
                    "#8b5cf6"
                ]
            }
        ]
    };

    return (
        <>
            <Sidebar />

            <div className="dashboard-content">

                <Navbar />

                <div className="row mb-4">

                    <div className="col-md-3">
                        <div className="report-card blue-card">
                            <h5>Total Revenue</h5>
                            <h2>₹52,000</h2>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="report-card green-card">
                            <h5>Total Payments</h5>
                            <h2>132</h2>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="report-card yellow-card">
                            <h5>Tenants</h5>
                            <h2>3</h2>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="report-card purple-card">
                            <h5>Properties</h5>
                            <h2>5</h2>
                        </div>
                    </div>

                </div>


                <div className="row mb-4">

                    <div className="col-md-8">
                        <div className="chart-card">
                            <h4>Monthly Revenue</h4>
                            <Line data={lineData} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="chart-card">
                            <h4>Revenue Distribution</h4>
                            <Pie data={pieData} />
                        </div>
                    </div>

                </div>


                <div className="chart-card">

                    <h4 className="mb-4">
                        System Statistics
                    </h4>

                    <Bar data={barData} />

                </div>

            </div>
        </>
    );
}

export default Reports;