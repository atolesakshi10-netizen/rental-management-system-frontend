import "../styles/Hero.css";
import dashboard from "../assets/dashboard.png";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaPlayCircle,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";

function Hero() {
  return (
    <section className="landing-hero">

      <div className="landing-hero-background">

        <div className="landing-circle landing-circle-one"></div>

        <div className="landing-circle landing-circle-two"></div>

        <div className="landing-circle landing-circle-three"></div>

      </div>

      <div className="landing-hero-left">

        <span className="landing-hero-badge">

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

          Simplify property management with secure blockchain verification,
          digital agreements, tenant management, payment tracking,
          audit logs and analytics.

        </p>

        <div className="landing-hero-buttons">

          <Link
            to="/login"
            className="landing-primary-btn"
          >

            Get Started

            <FaArrowRight />

          </Link>

          <button className="landing-secondary-btn">

            <FaPlayCircle />

            Live Demo

          </button>

        </div>

        <div className="landing-hero-features">

          <div>

            <FaCheckCircle />

            Secure Payments

          </div>

          <div>

            <FaCheckCircle />

            Blockchain Verified

          </div>

          <div>

            <FaCheckCircle />

            Audit Logs

          </div>

        </div>

      </div>

      <div className="landing-hero-right">

        <div className="landing-dashboard-wrapper">

          <img
            src={dashboard}
            alt="Dashboard"
          />

          <div className="landing-floating-card landing-card-one">

            <FaShieldAlt />

            <div>

              <h4>

                Blockchain

              </h4>

              <span>

                Verified

              </span>

            </div>

          </div>

          <div className="landing-floating-card landing-card-two">

            💰

            <div>

              <h4>

                Payments

              </h4>

              <span>

                ₹2.4L Collected

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;