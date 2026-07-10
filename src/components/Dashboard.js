import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Dashboard.css";

import {
  FaBuilding,
  FaUsers,
  FaFileContract,
  FaMoneyBillWave,
  FaLink,
  FaHistory
} from "react-icons/fa";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
} from "chart.js";

import { Doughnut, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

function Dashboard() {
  const [stats, setStats] = useState({
    properties: 0,
    tenants: 0,
    agreements: 0,
    payments: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await API.get(
  "/dashboard/stats",
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const donutData = {
    labels: ["Rent", "Deposits", "Maintenance"],
    datasets: [
      {
        data: [65, 20, 15],
        backgroundColor: ["#2563eb", "#10b981", "#f59e0b"],
        borderWidth: 0
      }
    ]
  };

  const barData = {
    labels: ["Properties", "Tenants", "Agreements", "Payments"],
    datasets: [
      {
        label: "Count",
        data: [
          stats.properties,
          stats.tenants,
          stats.agreements,
          stats.payments
        ],
        backgroundColor: [
          "#2563eb",
          "#10b981",
          "#f59e0b",
          "#8b5cf6"
        ]
      }
    ]
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1600, 1800, 2200, 2800, 3750],
        borderColor: "#2563eb",
        backgroundColor: "#2563eb",
        tension: 0.4
      }
    ]
  };

  return (
    <>
      <Sidebar />

      <div className="dashboard-content">

        <Navbar />

        <div className="row mb-5">

          <div className="col-md-3">
            <div className="card stat-card">
              <div className="metric-circle blue">
                <FaBuilding />
              </div>

              <div className="metric-content">
                <h5>Properties</h5>
                <h2>{stats.properties}</h2>
                <p>Total Properties</p>
                <span className="green">↑ 12%</span>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card stat-card">
              <div className="metric-circle green-bg">
                <FaUsers />
              </div>

              <div className="metric-content">
                <h5>Tenants</h5>
                <h2>{stats.tenants}</h2>
                <p>Active Tenants</p>
                <span className="green">↑ 8%</span>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card stat-card">
              <div className="metric-circle yellow">
                <FaFileContract />
              </div>

              <div className="metric-content">
                <h5>Agreements</h5>
                <h2>{stats.agreements}</h2>
                <p>Active Agreements</p>
                <span className="red">↓ 5%</span>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card stat-card">
              <div className="metric-circle purple">
                <FaMoneyBillWave />
              </div>

              <div className="metric-content">
                <h5>Payments</h5>
                <h2>{stats.payments}</h2>
                <p>This Month</p>
                <span className="green">↑ 15%</span>
              </div>
            </div>
          </div>

        </div>

        <div className="row mb-5">

          <div className="col-md-6">
            <div className="chart-card">

              <h4 className="mb-4 text-center">
                Payment Distribution
              </h4>

              <Doughnut data={donutData} />

            </div>
          </div>

          <div className="col-md-6">
            <div className="chart-card">

              <h4 className="mb-4 text-center">
                System Overview
              </h4>

              <Bar data={barData} />

            </div>
          </div>

        </div>
                {/* Quick Actions + Recent Activity */}

        <div className="row mb-5">

          <div className="col-md-7">

            <div className="activity-card">

              <h4 className="mb-4">
                Quick Actions
              </h4>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <Link
                    to="/properties"
                    className="btn btn-primary quick-btn w-100"
                  >
                    Manage Properties
                  </Link>
                </div>

                <div className="col-md-6 mb-3">
                  <Link
                    to="/tenants"
                    className="btn btn-success quick-btn w-100"
                  >
                    Manage Tenants
                  </Link>
                </div>

                <div className="col-md-6 mb-3">
                  <Link
                    to="/agreements"
                    className="btn btn-warning quick-btn w-100"
                  >
                    Manage Agreements
                  </Link>
                </div>

                <div className="col-md-6 mb-3">
                  <Link
                    to="/payments"
                    className="btn btn-info quick-btn w-100"
                  >
                    Manage Payments
                  </Link>
                </div>

                <div className="col-md-6 mb-3">
                  <Link
                    to="/blockchain"
                    className="btn btn-dark quick-btn w-100"
                  >
                    <FaLink /> Blockchain Verification
                  </Link>
                </div>

                <div className="col-md-6 mb-3">
                  <Link
                    to="/audit"
                    className="btn btn-secondary quick-btn w-100"
                  >
                    <FaHistory /> Audit Logs
                  </Link>
                </div>

              </div>

            </div>

          </div>


          <div className="col-md-5">

            <div className="activity-card">

              <h4 className="mb-4">
                Recent Activity
              </h4>

              <div className="activity-item">
                💰 Payment received
                <small className="float-end">
                  2 mins ago
                </small>
              </div>

              <div className="activity-item">
                📄 Agreement created
                <small className="float-end">
                  1 hour ago
                </small>
              </div>

              <div className="activity-item">
                👤 Tenant added
                <small className="float-end">
                  3 hours ago
                </small>
              </div>

              <div className="activity-item">
                🏠 Property updated
                <small className="float-end">
                  5 hours ago
                </small>
              </div>

            </div>

          </div>

        </div>


        {/* Payment Summary + Reminders */}

        <div className="row mb-5">

          <div className="col-md-6">

            <div className="activity-card">

              <h4 className="mb-4">
                Payment Summary
              </h4>

              <h2>₹3,750</h2>

              <p>Total Collected</p>

              <Line data={lineData} />

            </div>

          </div>


          <div className="col-md-6">

            <div className="activity-card">

              <h4 className="mb-4">
                Upcoming Reminders
              </h4>

              <div className="activity-item">
                📅 Rent Due - John Doe
                <small className="float-end text-danger">
                  Jun 20
                </small>
              </div>

              <div className="activity-item">
                📄 Lease Renewal
                <small className="float-end text-warning">
                  Jun 25
                </small>
              </div>

              <div className="activity-item">
                🔧 Maintenance Pending
                <small className="float-end">
                  Today
                </small>
              </div>

            </div>

          </div>

        </div>


        {/* Footer */}

        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "#94a3b8"
          }}
        >

          <hr />

          © 2026 Rental Management System | Version 2.0

        </div>

      </div>

    </>

  );

}

export default Dashboard;