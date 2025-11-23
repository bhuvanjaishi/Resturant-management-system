import React, { useState } from "react";
import "../App.css"; // Separate CSS file for styling

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear error
    setError("");

    // Handle login logic (API call can go here)
    alert(`Login successful!\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Your Account</h2>
        <p>Enter your credentials to access your account</p>
        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>

        <div className="login-footer">
          <a href="#">Forgot Password?</a>
          <span> | </span>
          <a href="signup">Register</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
