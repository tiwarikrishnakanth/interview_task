import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) =>
        user.email === email && user.password === password
    );

    if (!validUser) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(validUser)
    );

    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <p>Login with your credentials</p>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <span className="error">{error}</span>}

        <button onClick={handleLogin} className="primary-btn">
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="secondary-btn"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
