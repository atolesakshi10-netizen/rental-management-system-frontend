import "./../styles/Landing.css";
import dashboard from "../assets/dashboard.png";
import { Link } from "react-router-dom";

import {
  FaBuilding,
  FaUsers,
  FaMoneyBillWave,
  FaFileContract,
  FaShieldAlt,
  FaArrowRight,
  FaPlayCircle,
  FaReact,
  FaPython,
  FaDatabase,
  FaGithub
} from "react-icons/fa";

function Home() {

  return (

    <>

      {/* ================= NAVBAR ================= */}

      <header className="landing-navbar">

        <div className="landing-logo">

          🏠 RentalMS

        </div>

        <nav>

          <a href="#features">Features</a>

          <a href="#technology">Technology</a>

          <a href="#contact">Contact</a>

        </nav>

        <Link
          to="/login"
          className="landing-login"
        >

          Login

        </Link>

      </header>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-left">

          <span className="hero-badge">

            🚀 Blockchain Secured Rental Platform

          </span>

          <h1>

            Manage Your

            <br />

            Rental Business

            <br />

            <span>

              From One Dashboard

            </span>

          </h1>

          <p>

            Manage properties, tenants,
            agreements, payments,
            blockchain verification,
            audit logs and reports
            from one secure platform.

          </p>

          <div className="hero-buttons">

            <Link
              to="/login"
              className="primary-btn"
            >

              Get Started

              <FaArrowRight />

            </Link>

            <button
              className="secondary-btn"
            >

              <FaPlayCircle />

              Live Demo

            </button>

          </div>

          <div className="hero-list">

            <span>

              ✔ Secure Payments

            </span>

            <span>

              ✔ Blockchain Verification

            </span>

            <span>

              ✔ Audit Logs

            </span>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={dashboard}
            alt="Dashboard"
          />

          <div className="floating-card top-card">

            <FaShieldAlt />

            <div>

              <h4>

                Blockchain

              </h4>

              <p>

                Verified

              </p>

            </div>

          </div>

          <div className="floating-card bottom-card">

            💰

            <div>

              <h4>

                Payments

              </h4>

              <p>

                ₹2.4L Collected

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="stats">

        <div className="stat">

          <h1>

            100+

          </h1>

          <p>

            Properties

          </p>

        </div>

        <div className="stat">

          <h1>

            250+

          </h1>

          <p>

            Tenants

          </p>

        </div>

        <div className="stat">

          <h1>

            ₹10L+

          </h1>

          <p>

            Payments

          </p>

        </div>

        <div className="stat">

          <h1>

            100%

          </h1>

          <p>

            Secure

          </p>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section
        className="features"
        id="features"
      >

        <h2>

          Powerful Features

        </h2>

        <p>

          Everything required for modern rental management.

        </p>

        <div className="feature-grid">

          <div className="feature-card">

            <FaBuilding />

            <h3>

              Property Management

            </h3>

            <p>

              Manage all properties easily.

            </p>

          </div>

          <div className="feature-card">

            <FaUsers />

            <h3>

              Tenant Management

            </h3>

            <p>

              Store tenant details securely.

            </p>

          </div>

          <div className="feature-card">

            <FaMoneyBillWave />

            <h3>

              Payments

            </h3>

            <p>

              Rent tracking and receipts.

            </p>

          </div>

          <div className="feature-card">

            <FaFileContract />

            <h3>

              Agreements

            </h3>

            <p>

              Digital rental agreements.

            </p>

          </div>

          <div className="feature-card">

            <FaShieldAlt />

            <h3>

              Blockchain

            </h3>

            <p>

              Verify every agreement.

            </p>

          </div>

          <div className="feature-card">

            📊

            <h3>

              Dashboard

            </h3>

            <p>

              Beautiful analytics.

            </p>

          </div>

        </div>

      </section>
            {/* ================= TECHNOLOGY ================= */}

      <section
        className="technology"
        id="technology"
      >

        <h2>

          Technology Stack

        </h2>

        <p>

          Built with modern technologies for speed,
          security and scalability.

        </p>

        <div className="tech-grid">

          <div className="tech-card">

            <FaReact />

            <h3>

              React

            </h3>

          </div>

          <div className="tech-card">

            <FaPython />

            <h3>

              FastAPI

            </h3>

          </div>

          <div className="tech-card">

            <FaDatabase />

            <h3>

              PostgreSQL

            </h3>

          </div>

          <div className="tech-card">

            <FaGithub />

            <h3>

              GitHub

            </h3>

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section className="about">

        <div className="about-content">

          <div className="about-left">

            <h2>

              Why RentalMS?

            </h2>

            <p>

              RentalMS is a secure Rental Management System
              developed to simplify property management.
              It enables property owners to manage properties,
              tenants, agreements and payments while ensuring
              transparency through Blockchain verification.

            </p>

            <ul>

              <li>

                ✔ Secure Authentication (JWT)

              </li>

              <li>

                ✔ Blockchain Verification

              </li>

              <li>

                ✔ PDF Receipt Generation

              </li>

              <li>

                ✔ Email Notifications

              </li>

              <li>

                ✔ Audit Logs

              </li>

            </ul>

          </div>

          <div className="about-right">

            <img
              src={dashboard}
              alt="Dashboard Preview"
            />

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
        className="contact"
        id="contact"
      >

        <h2>

          Contact

        </h2>

        <p>

          Interested in this project?
          Let's connect.

        </p>

        <div className="contact-grid">

          <div className="contact-card">

            📧

            <h3>

              Email

            </h3>

            <p>

              sakshi.rental.system@gmail.com

            </p>

          </div>

          <div className="contact-card">

            💻

            <h3>

              GitHub

            </h3>

            <p>

              Rental Management System

            </p>

          </div>

          <div className="contact-card">

            🌐

            <h3>

              Live Demo

            </h3>

            <p>

              Render + Vercel

            </p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-content">

          <div>

            <h2>

              RentalMS

            </h2>

            <p>

              Smart • Secure • Scalable

            </p>

          </div>

          <div>

            <h4>

              Quick Links

            </h4>

            <ul>

              <li>

                Features

              </li>

              <li>

                Technology

              </li>

              <li>

                Contact

              </li>

            </ul>

          </div>

          <div>

            <h4>

              Built Using

            </h4>

            <ul>

              <li>

                React

              </li>

              <li>

                FastAPI

              </li>

              <li>

                PostgreSQL

              </li>

              <li>

                Blockchain

              </li>

            </ul>

          </div>

        </div>

        <hr />

        <p className="copyright">

          © 2026 Rental Management System.
          All Rights Reserved.

        </p>

      </footer>

    </>

  );

}

export default Home;