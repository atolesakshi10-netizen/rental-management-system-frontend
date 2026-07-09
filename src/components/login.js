
import { useState } from "react";
import {
  FaBuilding,
  FaUser,
  FaLock,
  FaEye,
  FaGoogle,
  FaMicrosoft,
  FaShieldAlt,
  FaCogs,
  FaChartLine
} from "react-icons/fa";

import "./Login.css";
import { loginUser } from "../services/auth";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    console.log("Login button clicked");

    try {

      const response = await loginUser(
        username,
        password
      );

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      window.location.href = "/dashboard";

    }
    catch (error) {

      alert(
        error.response?.data?.detail ||
        error.message
      );

    }

  };

  return (

    <div className="login-container">

      <div className="left-panel">

        <div className="logo-section">

          <FaBuilding className="logo-icon" />

          <h1>RMS</h1>

          <h3>Rental Management System</h3>

          <p>Smart. Secure. Scalable.</p>

        </div>

      </div>


      <div className="right-panel">

        <div className="login-card">

          <h1>Welcome Back! 👋</h1>

          <p>Please sign in to your account</p>

          <form onSubmit={handleLogin}>

            <div className="input-box">

              <FaUser />

              <input
                placeholder="Email Address"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
              />

            </div>

            <div className="input-box">

              <FaLock />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <FaEye />

            </div>

            <div className="remember-row">

              <label>

                <input type="checkbox" />

                Remember me

              </label>

              <a href="/">Forgot Password?</a>

            </div>

            <button
              type="submit"
              className="login-btn"
            >
              Sign In
            </button>

          </form>

          <div className="divider">

            or continue with

          </div>

          <div className="social-buttons">

            <button>

              <FaGoogle />

              Google

            </button>

            <button>

              <FaMicrosoft />

              Microsoft

            </button>

          </div>

        </div>

      </div>

      <div className="feature-cards">

        <div className="feature-box">

          <FaShieldAlt />

          Secure & Reliable

        </div>

        <div className="feature-box">

          <FaCogs />

          Smart & Simple

        </div>

        <div className="feature-box">

          <FaChartLine />

          Powerful & Scalable

        </div>

      </div>

    </div>

  );

}

export default Login;

