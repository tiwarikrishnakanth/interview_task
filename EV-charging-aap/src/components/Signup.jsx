import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    setError("");

    const { name, email, mobile, password } = formData;

    if (!name || !email || !mobile || !password) {
      setError("All fields are required");
      return;
    }

    const isEmail = email.includes("@") && email.includes(".");
    if (!isEmail) {
      setError("Enter a valid email");
      return;
    }

    const isMobile =
      !isNaN(mobile) && mobile.length === 10 && mobile[0] >= "6";
    if (!isMobile) {
      setError("Enter a valid mobile number");
      return;
    }

    // get existing users
    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    // check if email already exists
    const userExists = existingUsers.find(
      (user) => user.email === email
    );

    if (userExists) {
      setError("User already exists. Please login.");
      return;
    }

    // add new user
    existingUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    navigate("/"); // redirect to login page
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <p>Create a new account</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        {error && <span className="error">{error}</span>}

        <button onClick={handleSignup} className="primary-btn">
          Sign Up
        </button>

        <button
          onClick={() => navigate("/")}
          className="secondary-btn"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Signup;
